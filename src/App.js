import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (      
      <Router>     
        <Navbar/>
        <Container customClass="min-height">
          <Routes >
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Projects" exact element={<Projects/>}/>
            <Route path="/Company" exact element={<Company/>}/>            
            <Route path="/contact" exact element={<Contact/>}/>            
            <Route path="/NewProject" exact element={<NewProject/>}/>          
          </Routes>
          <Footer/>
        </Container>        
      </Router>    
  )
}

export default App
