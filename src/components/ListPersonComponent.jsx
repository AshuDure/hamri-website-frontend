import React, {useEffect, useState} from 'react'
import { listPersons } from '../services/PersonService'
import { useNavigate } from 'react-router-dom'

const ListPersonComponent = () => {

    const [persons, setPersons] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listPersons().then((response) => {
            setPersons(response.data);
        }).catch(error => {
            console.error(error);
        })
    })

    function addNewPerson(){
        navigator('/add-person')

    }



  return (
    <div className='container'>
        <h2 className='text-center'>List of Registered Personels</h2>
        <button className='btn btn-primary mb-2'onClick={addNewPerson}>Add Person</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person => 
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.phoneNumber}</td>                            
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListPersonComponent