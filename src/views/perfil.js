import { useState, useEffect } from "react"
import { Button, Row, Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { TitlePage } from '../assets/styled';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { updateProfile, getUsuarioId } from '../store/participante/participante.action';
import { getServiceDetalhesUsuarios } from '../services/participante.service';
import * as moment from "moment";


const Perfil = () => {
    document.title = "Casa da Dinda";
    const dispatch = useDispatch()

    const perfil = useSelector(state => state.auth.usuario);
    const [hasError, setHasError] = useState(false)
    const [success, setSuccess] = useState(false)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const registered = useSelector(state => state.auth.registered)

    const [formValidate, setFormValidate] = useState({});
    const [form, setForm] = useState({});

    const handleChange = (props) => {
        const { value, name } = props.target;
        formValidarCampo(name, value);
        setForm({
            ...form,
            [name]: value,
        });
    }


    const formValidarCampo = (nome, valor) => {
        var menssage = "";
        switch (nome) {
            case 'nomeusuario':
                var nomeregex = /\d/g;
                if (nomeregex.test(valor)) {
                    menssage += "Não pode conter números!"
                }
                else if (valor.trim() == "") {
                    menssage += "Não pode ser vazio!"
                }
                else if (valor.length < 5) {
                    menssage += "Não ter menos que 5 caracteres!"
                }
                break;

            case 'datanascimentoparticipante':
                    const datanasc = valor

                    const dataAtual = moment().format("DD/MM/YYYY");

                    if (!moment(datanasc).isValid) {
                        menssage += "Data inválida!"
                    }
                    else if (moment(datanasc).isAfter(dataAtual)) {
                        menssage += "Data maior que a atual!"
                    }
                
                break;

            case 'nomeparticipante':
                var nomeregex = /\d/g;
                if (nomeregex.test(valor)) {
                    menssage += "Nome não pode conter números!"
                }
                else if (valor.trim() == "") {
                    menssage += "Nome não pode ser vazio!"
                }
                else if (valor.length < 5) {
                    menssage += "Não ter menos que 5 caracteres!"
                }
                break;

            case 'cpf':
                // Aceita apenas traço(-), ponto(.) e números (0 a 9)
                var filtraCpf = /(?:\.|-|[0-9])*/;

                if (filtraCpf.test(valor)) {
                    menssage += "CPF inválido"
                }
                else if (valor.trim() == "") {
                    menssage += "Não pode ser vazio!"
                }
                else if (valor.length < 11) {
                    menssage += "CPF inválido!"
                }
                break;


            case 'telefone':
                // Nenhum DDD iniciado por 0 é aceito, e nenhum número de telefone pode iniciar com 0 ou 1.
                // +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888
                var filtraTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

                if (!filtraTelefone.test(valor)) {
                    menssage += "Número de telefone inválido!"

                }
                else if (valor.replace(" ", "") == "") {
                    menssage += "Campo em branco!"
                }
                break;

            case 'endereco':
                if ((valor) === "") {
                    menssage += "Campo em branco!"
                }
                break;


            case 'email':
                var filtraEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!filtraEmail.test(valor)) {
                    menssage += "E-mail inválido!"

                } else if (valor.replace(" ", "") == "") {
                    menssage += "Campo em branco!"
                }
                break;


        }

        setFormValidate({ ...formValidate, [nome]: menssage })

    }

    const closeError = () => setHasError(false);

    const formatDate = (date) => {
        return (
            new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
        )
    }


    const buscarDadosUsuario = async () => {

        var formulario = await getServiceDetalhesUsuarios(perfil.id);
        setForm({ ...formulario.data });
    }

    useEffect(() => {
        buscarDadosUsuario();
    }, [])


    const updateForm = () => {
        const nform = {
            id: perfil.id,
            nomeusuario: form.nomeusuario,
            datanascimentoparticipante: new Date(form.datanascimentoparticipante).toLocaleDateString("pt-br").replaceAll('-', '/') || "",
            nomeparticipante: !isAdmin ? (form.nomeparticipante) : (form.nomeparticipante = "Administrador"),
            cpf: form.cpf,
            tipo: !isAdmin ? (form.tipo = "2") : (form.tipo = "1"),
            telefone: form.telefone,
            endereco: form.endereco,
            email: form.email
        }
        dispatch(updateProfile(nform));
        buscarDadosUsuario();
    }

    return (
        <>
            <TitlePage>Perfil</TitlePage>

            <BoxInscricao>
                <Col xs="12" sm="12" md="8" lg="8">
                    <FormGroup>
                        <Label htmlFor="name">Nome do Usuário</Label>
                        <Input invalid={formValidate.nomeusuario ? true : false} disabled={loading} type="text" id="nomeusuario" value={form.nomeusuario || ""} onChange={handleChange}
                            name="nomeusuario" placeholder="Insira seu nome" />
                        <FormFeedback>{formValidate.nomeusuario || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="datanascimentoparticipante">Data de Nascimento</Label>
                        <Input invalid={formValidate.datanascimentoparticipante ? true : false} disabled={loading} type="date" id="datanascimentoparticipante" value={moment(form.datanascimentoparticipante).format("YYYY/MM/DD").replaceAll("/", "-") || ""} onChange={handleChange}
                            name="datanascimentoparticipante" />
                        <FormFeedback>{formValidate.datanascimentoparticipante || ""}</FormFeedback>
                    </FormGroup>
                    
                    {!isAdmin ? (
                        <FormGroup>
                            <Label htmlFor="nomeparticipante">Nome do Participante</Label>

                            <Input invalid={formValidate.nomeparticipante ? true : false} disabled={loading} type="text" id="nomeparticipante" value={form.nomeparticipante || ""} onChange={handleChange}
                                name="nomeparticipante" placeholder="Insira nome do participante" />
                            <FormFeedback>{formValidate.nomeparticipante || ""}</FormFeedback>
                        </FormGroup>
                    ) : ""}
                    
                    <FormGroup>
                        <Label htmlFor="cpf">CPF</Label>
                        <Input invalid={formValidate.cpf ? true : false} disabled={loading} type="text" name="cpf" id="cpf" value={form.cpf || ""} onChange={handleChange} placeholder="Insira o seu cpf" />
                        <FormFeedback>{formValidate.cpf || ""}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input invalid={formValidate.telefone ? true : false} disabled={loading} type="text" id="telefone" value={form.telefone || ""} onChange={handleChange}
                            name="telefone" placeholder="Insira o seu telefone" />
                        <FormFeedback>{formValidate.telefone || ""}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="endereco">Endereco</Label>
                        <Input invalid={formValidate.endereco ? true : false} disabled={loading} type="text" id="endereco" value={form.endereco || ""} onChange={handleChange}
                            name="endereco" placeholder="Insira o seu endereco" />
                        <FormFeedback>{formValidate.endereco || ""}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input invalid={formValidate.email ? true : false} disabled={loading} type="email" id="email" value={form.email || ""} onChange={handleChange}
                            name="email" placeholder="Insira seu email" />
                        <FormFeedback>{formValidate.email || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" onClick={updateForm}>Alterar</Button>
                    </FormGroup>
                </Col>
            </BoxInscricao>

        </>
    )
}


export default Perfil;

const BoxInscricao = styled(Row)`
`