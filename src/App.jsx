import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
