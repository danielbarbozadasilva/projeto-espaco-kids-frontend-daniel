import { Button, Col, Label, Row, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUsuario } from '../../store/usuario/usuario.action';
import ReactSwal from '../../plugins/swal';

const FormUsuario = (props) => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const formatDate = (data) => {
        const [y, m, d] = data.split('-')
        return `${d}/${m}/${y}`
    }

    const handleSubmit = () => {
        const nForm = {
            ...form,
            datanascimento: formatDate(form.datanascimento)
        }

        dispatch(createUsuario(nForm))

        ReactSwal.fire({
            icon: 'success',
            title: `Usuário ${form.nomeusuario} cadastrado com sucesso !`,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 4000,
        })
        setForm({});

        setTimeout(() => {
            props.setIsForm(false)
        }, 4000);
    }


    return (
        <BoxInscricao>
            <Col xs="12" sm="12" md="8" lg="8">
                <FormGroup>
                    <Label for="nomeusuario">Nome do usuário</Label>
                    <Input type="text" id="nomeusuario" value={form.nomeusuario || ""} onChange={handleChange}
                        name="nomeusuario" placeholder="Insira o nome do usuário" />
                </FormGroup>
                <FormGroup>
                    <Label for="datanascimento">Data de nascimento</Label>
                    <Input type="date" id="datanascimento" value={form.datanascimento || ""} onChange={handleChange}
                        name="datanascimento" />
                </FormGroup>
                <FormGroup>
                    <Label for="nomeparticipante">Nome do participante</Label>
                    <Input type="text" id="nomeparticipante" value={form.nomeparticipante || ""} onChange={handleChange}
                        name="nomeparticipante" placeholder="Insira o nome do participante" />
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input type="text" id="cpf" value={form.cpf || ""} onChange={handleChange}
                        name="cpf" placeholder="Insira o seu cpf" />
                </FormGroup>
                <FormGroup>
                    <Label for="telefone">Telefone</Label>
                    <Input type="text" id="telefone" value={form.telefone || ""} onChange={handleChange}
                        name="telefone" placeholder="Insira o seu telefone" />
                </FormGroup>
                <FormGroup>
                    <Label for="endereco">Endereço</Label>
                    <Input type="text" id="endereco" value={form.endereco || ""} onChange={handleChange}
                        name="endereco" placeholder="Insira o seu endereço"/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" id="email" value={form.email || ""} onChange={handleChange}
                        name="email" placeholder="Insira o seu email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="senha">Senha</Label>
                    <Input type="text" id="senha" value={form.senha || ""} onChange={handleChange}
                        name="senha" placeholder="Insira a sua senha"/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={handleSubmit}>Cadastrar</Button>
                </FormGroup>
            </Col>
        </BoxInscricao>
    )

}

export default FormUsuario;


const BoxInscricao = styled(Row)``