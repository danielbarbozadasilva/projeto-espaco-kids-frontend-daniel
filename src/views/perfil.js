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
//    const formatDate = (data) => {
//         const [y, m, d] = data.split('-')
//         return `${d}/${m}/${y}`
//     }

    const updateForm = () => {
        const nform = {
            ...form,
            nameusuario: form.nameusuario,
            email: form.email,
            nomeparticipante: form.nomeparticipante,
            datanascimento: form.datanascimento
        }
        console.log(nform)
    }

    return (
        <>
            <TitlePage>Perfil</TitlePage>

            <BoxInscricao>
                <Col xs="12" sm="12" md="8" lg="8">
                    <FormGroup>
                        <Label for="name">Nome do Usuário</Label>
                        <Input type="text" id="name" value={form.nomeusuario || ""} onChange={handleChange}
                            name="nome" placeholder="Insira seu nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" value={form.email || ""} onChange={handleChange}
                            name="email" placeholder="Insira seu email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nomeparticipante">Nome do Participante</Label>
                        <Input type="text" name="nomeparticipante" id="nomeparticipante" value={form.nomeparticipante || ""} onChange={handleChange} placeholder="Insira o nome do participante" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="datanascimento">Data de Nascimento</Label>
                        <Input type="date" id="datanascimento" value={form.datanascimento || ""} onChange={handleChange}
                            name="datanascimento" />
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