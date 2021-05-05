import React, { useState } from 'react';

import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../../assets/css/style.css';

import { FormGroup, Label, Input, Alert, Button, Spinner, FormFeedback } from 'reactstrap';

const SignUp = () => {

    const [hasError, setHasError] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const registered = useSelector(state => state.auth.registered)

    const [formValidate, setFormValidate] = useState({});
    const [form, setForm] = useState({
        nomeusuario: "",
        datanascimentoparticipante: "",
        nomeparticipante: "",
        cpf: "",
        telefone: "",
        endereco: "",
        email: "",
        senha: "",
    })
    const handleChange = (props) => {
        const { value, name } = props.target;
        formValidarCampo(name, value);
        setForm({
            ...form,
            [name]: value,
        });
    };

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
                var dataAtual = new Date();
                var dataInformadaConvertida = new Date(valor);
                var filtroData = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
                if (!filtroData.test(valor)) {
                    menssage += "Data inválida!"
                }
                else if (dataInformadaConvertida.getTime() >= dataAtual.getTime()) {
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


            case 'senha':
                if (valor.length < 5) {
                    menssage += "Não ter menos que 5 caracteres!"
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

    const submitForm = (event) => {

        const nForm = {
            ...form,
            datanascimentoparticipante: formatDate(form.datanascimentoparticipante)
        }

        dispatch(signUpAction(nForm))
    }

    const isNotValid = () => {
        const inputs = ['nomeusuario', 'datanascimentoparticipante', 'nomeparticipante', 'cpf', 'telefone', 'endereco', 'email', 'senha']
        const invalid = (label) => !Object.keys(form).includes(label) || form[label].length === 0

        const validacoes = Object.values(formValidate).filter(item => item !== "").length > 0

        return inputs.some(item => invalid(item)) || validacoes

    }

    useEffect(() => {

        if (error.length > 0) {
            setHasError(true);
        } else {
            setHasError(false);
        }

        if (registered) {
            setSuccess(true)
            setForm({})
        }
    }, [error, registered])


    return (
        <>
            <div className="colunasFormularios">
                <div className="coluna1">
                    <h2 tag="h4" className="text-cadastro">Cadastre-se</h2>
                    <FormGroup>
                        <Label htmlFor="nomeusuario" className="label" >Nome do Usuário:</Label>
                        <Input invalid={formValidate.nomeusuario ? true : false} disabled={loading} type="text" name="nomeusuario" id="nomeusuario" onChange={handleChange} value={form.nomeusuario || ""} placeholder="Informe o nome do usuário" />
                        <FormFeedback>{formValidate.nomeusuario || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="datanascimentoparticipante" className="label" >Data de Nascimento:</Label>
                        <Input invalid={formValidate.datanascimentoparticipante ? true : false}  disabled={loading} type="date" name="datanascimentoparticipante" id="datanascimentoparticipante" onChange={handleChange} value={form.datanascimentoparticipante || ""} placeholder="Informe o e-mail" />
                        <FormFeedback>{formValidate.datanascimentoparticipante || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="nomeparticipante" className="label">Nome do Participante:</Label>
                        <Input invalid={formValidate.nomeparticipante ? true : false} disabled={loading} type="text" name="nomeparticipante" id="nomeparticipante" onChange={handleChange} value={form.nomeparticipante || ""} placeholder="Informe o nome do participante" />
                        <FormFeedback>{formValidate.nomeparticipante || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="cpf" className="label">Cpf:</Label>
                        <Input invalid={formValidate.cpf ? true : false} disabled={loading} type="text" name="cpf" id="cpf" onChange={handleChange} value={form.cpf || ""} placeholder="Informe o cpf" />
                        <FormFeedback>{formValidate.cpf || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="telefone" className="label">Telefone:</Label>
                        <Input invalid={formValidate.telefone ? true : false} disabled={loading} type="text" name="telefone" id="telefone" onChange={handleChange} value={form.telefone || ""} placeholder="Informe o telefone" />
                        <FormFeedback>{formValidate.telefone || ""}</FormFeedback>
                    </FormGroup>
                </div>
                <div className="coluna2">
                    <FormGroup>
                        <Label htmlFor="endereco" className="label">Endereço:</Label>
                        <Input invalid={formValidate.endereco ? true : false} disabled={loading} type="text" name="endereco" id="endereco" onChange={handleChange} value={form.endereco || ""} placeholder="Informe o endereço" />
                        <FormFeedback>{formValidate.endereco || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email" className="label">E-mail:</Label>
                        <Input invalid={formValidate.email ? true : false} disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                        <FormFeedback>{formValidate.email || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="senha" className="label">Senha:</Label>
                        <Input invalid={formValidate.senha ? true : false} disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                        <FormFeedback>{formValidate.senha || ""}</FormFeedback>
                    </FormGroup>

                    <Button className="botaoFormulario" color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="md" block onClick={submitForm}>
                        {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Cadastrar"}
                    </Button>
                    <Alert color="success" isOpen={success} toggle={() => setSuccess(!success)}>
                        <div><strong>Usuario </strong> cadastrado com sucesso.</div>
                        <div>Você será redirecionado em 5 segundos.</div>

                    </Alert>
                    <Alert color="danger" isOpen={hasError} toggle={closeError}>
                        <div><strong>OPS !!! </strong> Aconteceu um erro.</div>
                        <small>Verifique usuário e senha</small>
                    </Alert>

                </div>
            </div>
        </>
    );
}

export default SignUp;
