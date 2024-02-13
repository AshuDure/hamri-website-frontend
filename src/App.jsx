
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPersonComponent from './components/ListPersonComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element = {<ListPersonComponent/>}></Route>

            {/* // http://localhost:3000/persons */}
            <Route path='/persons' element = {<ListPersonComponent/>}></Route>
          </Routes>
        
        <FooterComponent/>        
      </BrowserRouter>
      
    </>
  )
}

export default App
