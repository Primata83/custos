import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'

function App() {
  return (
      
      <Router>
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
          <p>Footer</p>
        </Container>        
      </Router>    
  )
}

export default App
