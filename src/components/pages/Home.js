import styles from './Home.module.css'
import logo from '../imagens/custos.png'
import LinkButton from '../layout/LinkButton'


function Home () {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Custos</span>
            </h1>  
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text ='Criar Projeto'/>
            <a href="/"></a>
            <img src={logo} alt="Custos"/>
        </section>
         
    )  
}

export default Home