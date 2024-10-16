import {useState, useEffect} from 'react'
import Input from '../form/Input'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.jason())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <form className={styles.form}>
           <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o nome do projeto"
            />
            <Select 
                name="category_id" 
                text="Selecione a categoria"
                options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm