import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (      
      <Router>
        <Navbar/>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newproject">NewProject</Link>
        </div>
        
        <Container customClass="min-height">
          <Routes >
            <Route path="/" exact element={<Home/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
            <Route path="/Company" exact element={<Company/>}/>
            <Route path="/NewProject" exact element={<NewProject/>}/>          
          </Routes>
          <Footer/>
        </Container>        
      </Router>    
  )
}

export default App
