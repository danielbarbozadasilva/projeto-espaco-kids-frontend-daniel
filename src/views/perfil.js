import { useState } from "react"
import { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { TitlePage } from '../assets/styled';
import { useSelector } from 'react-redux';
import styled from "styled-components";



const Perfil = () => {
    document.title = "Casa da Dinda";
    const perfil = useSelector(state => state.auth.usuario);
    console.log(perfil);
    const [form, setForm] = useState({ ...perfil });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const updateForm = () => {
        const nform = {
            ...form,
            name: form.name.toUpperCase(),
            email: form.email.toLowerCase()
        }
        console.log(nform)
    }

    return (
        <>
            <TitlePage>Perfil</TitlePage>

            <BoxInscricao>
                <Col xs="12" sm="12" md="8" lg="8">
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" id="name" value={form.nome || ""} onChange={handleChange}
                            name="nome" placeholder="Insira seu nome" className="text-uppercase" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" value={form.email || ""} onChange={handleChange}
                            name="email" placeholder="Insira seu email" className="text-lowercase" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nascimento">Data Nascimento</Label>
                        <Input type="date" id="nascimento" value={form.data_nascimento || ""} onChange={handleChange}
                            name="data_nascimento" placeholder="Insira seu nascimento" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" onClick={updateForm}>Cadastrar</Button>
                    </FormGroup>
                </Col>
            </BoxInscricao>

        </>
    )
}


export default Perfil;

const BoxInscricao = styled(Row)`
`