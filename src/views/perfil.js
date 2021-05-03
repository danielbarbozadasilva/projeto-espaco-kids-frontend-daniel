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
    const informacoes = useSelector(state => state.usuario.detail)

    const [form, setForm] = useState({...informacoes});

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,

        });
    }


    useEffect(() => {
        console.log('-----consulta id: '+perfil.id)
        dispatch(getUsuarioId(perfil.id));
    }, [dispatch])


    const updateForm = () => {
        const nform = {
            id: perfil.id,
            nomeusuario: form.nomeusuario,
            datanascimentoparticipante: new Date(form.datanascimentoparticipante).toLocaleDateString("pt-br").replaceAll('-', '/') || "",
            nomeparticipante: !isAdmin ? (form.nomeparticipante) : (form.nomeparticipante = "Administrador"),
            cpf: form.cpf,
            tipo: form.tipo,
            telefone: form.telefone,
            endereco: form.endereco,
            email: form.email,
            senha: form.senha

        }
        dispatch(updateProfile(nform));
    }

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
                        <Label htmlFor="senha">Nova Senha</Label>
                        <Input type="password" id="senha" value={form.senha || ""} onChange={handleChange}
                            name="senha" placeholder="Insira sua nova senha" />
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