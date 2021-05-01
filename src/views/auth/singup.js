import React, { useState } from 'react';

import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../../assets/css/style.css';

import { FormGroup, Label, Input, Alert, Button, Spinner,FormFeedback } from 'reactstrap';

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
                var nomeregex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
                if (!nomeregex.test(valor)){
                    menssage += "Não pode conter números "
                } 
                else if(valor.trim() == ""){
                    menssage += "Não pode ser vazio "
                } 
                else if(valor.length < 5) {
                    menssage += "Não ter menos que 5 caracteres "
                }
                
            break;
        }
       
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

        const validacoes = Object.values(formValidate).length > 0

    console.log('prof: '+inputs.some(item => invalid(item))+'     Validações: '+validacoes)
    
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
        console.log(error)
        console.log(registered)
    }, [error, registered])


    return (
        <>
            <div className="colunasFormularios">
                <div className="coluna1">
                    <h2 tag="h4" className="text-cadastro">Cadastre-se</h2>
                    <FormGroup>
                        <Label htmlFor="nomeusuario" className="label" >Nome do Usuário:</Label>
                        <Input invalid ={formValidate.nomeusuario ? true : false} disabled={loading} type="text" name="nomeusuario" id="nomeusuario" onChange={handleChange} value={form.nomeusuario || ""} placeholder="Informe o nome do usuário" />
                        <FormFeedback>{formValidate.nomeusuario || ""}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="datanascimentoparticipante" className="label" >Data de Nascimento:</Label>
                        <Input disabled={loading} type="date" name="datanascimentoparticipante" id="datanascimentoparticipante" onChange={handleChange} value={form.datanascimentoparticipante || ""} placeholder="Informe o e-mail" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nomeparticipante" className="label">Nome do Participante:</Label>
                        <Input disabled={loading} type="text" name="nomeparticipante" id="nomeparticipante" onChange={handleChange} value={form.nomeparticipante || ""} placeholder="Informe o nome do participante" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cpf" className="label">Cpf:</Label>
                        <Input disabled={loading} type="text" name="cpf" id="cpf" onChange={handleChange} value={form.cpf || ""} placeholder="Informe o cpf" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="telefone" className="label">Telefone:</Label>
                        <Input disabled={loading} type="text" name="telefone" id="telefone" onChange={handleChange} value={form.telefone || ""} placeholder="Informe o telefone" />
                    </FormGroup>
                </div>
                <div className="coluna2">
                    <FormGroup>
                        <Label htmlFor="endereco" className="label">Endereço:</Label>
                        <Input disabled={loading} type="text" name="endereco" id="endereco" onChange={handleChange} value={form.endereco || ""} placeholder="Informe o endereço" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email" className="label">E-mail:</Label>
                        <Input disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="senha" className="label">Senha:</Label>
                        <Input disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
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
