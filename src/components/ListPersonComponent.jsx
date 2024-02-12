import React from 'react'

const ListPersonComponent = () => {

    const dummyData = [{
        "id": 1,
        "firstName": "Ashenafi",
        "lastName": "Duressa",
        "email": "adure@gmail.com",
        "phoneNumber": 2406652217
    }, {
        "id": 2,
        "firstName": "Firework",
        "lastName": "Duressa",
        "email": "fdure@gmail.com",
        "phoneNumber": 2406652220
    },{
        "id": 3,
        "firstName": "Bereket",
        "lastName": "Duressa",
        "email": "bdure@gmail.com",
        "phoneNumber": 2406652240
    }

    ]
  return (
    <div className='container'>
        <h2 className='text-center'>List of Registered Personels</h2>
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
                    dummyData.map(person => 
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