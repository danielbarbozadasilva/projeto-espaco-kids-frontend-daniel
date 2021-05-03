import { useState, useEffect} from "react"
import { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { TitlePage } from '../assets/styled';
import { useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import { updateProfile, getUsuarioId } from '../store/participante/participante.action';
const Perfil = () => {
    document.title = "Casa da Dinda";
    const dispatch = useDispatch()

    const perfil = useSelector(state => state.auth.usuario);

    const isAdmin = useSelector(state => state.auth.isAdmin)
    const detalhe = useSelector(state => state.usuario)

    const [form, setForm] = useState({ ...detalhe });

    console.log({ ...detalhe })
    const handleChange = (e) => {
        setForm({
            ...detalhe,
            [e.target.name]: e.target.value
        })
    }


    const updateForm = () => {
        const nform = {
            ...form,
            id: form.id,
            nameusuario: form.nameusuario,
            datanascimentoparticipante: form.datanascimentoparticipante,
            nomeparticipante: !isAdmin ? (form.nomeparticipante) : (form.nomeparticipante = "Administrador"),
            cpf: form.cpf,
            telefone: form.telefone,
            endereco: form.endereco,
            email: form.email

        }
        dispatch(updateProfile(nform));
    }

    console.log('perfil',perfil.id) //ok

  useEffect(() => {
        dispatch(getUsuarioId(perfil.id));
    }, [dispatch])
    return (
        <>
            <TitlePage>Perfil</TitlePage>

            <BoxInscricao>
                <Col xs="12" sm="12" md="8" lg="8">
                    <FormGroup>
                        <Label htmlFor="name">Nome do Usuário</Label>
                        <Input type="text" id="nomeusuario" value={form.nomeusuario || ""} onChange={handleChange}
                            name="nomeusuario" placeholder="Insira seu nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="datanascimentoparticipante">Data de Nascimento</Label>
                        <Input type="date" id="datanascimentoparticipante" value={new Date(form.datanascimentoparticipante).toLocaleDateString("en-ZA").replaceAll('/', '-') || ""} onChange={handleChange}
                            name="datanascimentoparticipante" />
                    </FormGroup>
                    {!isAdmin ? (
                        <FormGroup>
                            <Label htmlFor="nomeparticipante">Nome do Participante</Label>

                            <Input type="text" id="nomeparticipante" value={form.nomeparticipante || ""} onChange={handleChange}
                                name="nomeparticipante" placeholder="Insira nome do participante" />

                        </FormGroup>
                    ) : ""}
                    <FormGroup>
                        <Label htmlFor="cpf">CPF</Label>
                        <Input type="text" name="cpf" id="cpf" value={form.cpf || ""} onChange={handleChange} placeholder="Insira o seu cpf" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input type="text" id="telefone" value={form.telefone || ""} onChange={handleChange}
                            name="telefone" placeholder="Insira o seu telefone" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="endereco">Endereco</Label>
                        <Input type="text" id="endereco" value={form.endereco || ""} onChange={handleChange}
                            name="endereco" placeholder="Insira o seu endereco" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" value={form.email || ""} onChange={handleChange}
                            name="email" placeholder="Insira seu email" />
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