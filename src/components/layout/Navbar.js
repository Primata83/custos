import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../imagens/bitReduzido.png'

function Navbar () {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul class={styles.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/newproject">NewProject</Link>   
                    </li>             
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar