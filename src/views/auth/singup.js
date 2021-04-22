import React, { useState } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert, Spinner
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SignUp = () => {

    const [hasError, setHasError] = useState(false)
    const [success, showSuccess] = useState(false)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const registered = useSelector(state => state.auth.registered)

    const [form, setForm] = useState({
        nomeusuario:"",
        datanascimento:"",
        nomeparticipante:"",
        cpf:"",
        telefone:"",
        endereco:"",
        email:"",
        senha:"",
    })
    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const closeError = () => setHasError(false);

    const formatDate = (date) => {
        return (
            // .toLocaleDateString('pt-BR', { timeZone: 'UTC' })
            new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
        )
    }

    const submitForm = (event) => {

        const nForm = {
            ...form,
            datanascimento: formatDate(form.datanascimento)
        }

        dispatch(signUpAction(nForm))
    }

    const isNotValid = () => {
        const inputs = ['nomeusuario', 'datanascimento', 'nomeparticipante', 'cpf', 'telefone', 'endereco', 'email', 'senha']
        const invalid = (label) => !Object.keys(form).includes(label) || form[label].length === 0
        return inputs.some(item => invalid(item))
    }

    useEffect(() => {

        if (error.length > 0) {
            setHasError();
        }

        if (registered) {
            showSuccess(true)
            setForm({})
        }
        console.log(error)
        console.log(registered)
    }, [error, registered])




    return (
        <Sign>
            <Col sm={12} md={4} lg={5}>
                <Alert color="success" isOpen={success} toggle={() => showSuccess(!success)}>
                    <div><strong>Usuario </strong> cadastrado com sucesso.</div>
                    <div>Você será redirecionado em 5 segundos.</div>

                </Alert>
                <Alert color="danger" isOpen={hasError} toggle={closeError}>
                    <div><strong>OPS !!! </strong> Aconteceu um erro.</div>
                    <small>Verifique usuário e senha</small>
                </Alert>
                <Card>
                    <CardHeader tag="h4" className="text-center">Cadastre-se</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="nomeusuario">Nome do Usuário:</Label>
                                <Input disabled={loading} type="text" name="nomeusuario" id="nomeusuario" onChange={handleChange} value={form.nomeusuario || ""} placeholder="Informe o nome do usuário" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="datanascimento">Data de Nascimento:</Label>
                                <Input disabled={loading} type="date" name="datanascimento" id="datanascimento" onChange={handleChange} value={form.datanascimento || ""} placeholder="Informe o e-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="nomeparticipante">Nome do Participante:</Label>
                                <Input disabled={loading} type="text" name="nomeparticipante" id="nomeparticipante" onChange={handleChange} value={form.nomeparticipante || ""} placeholder="Informe o nome do participante" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cpf">Cpf:</Label>
                                <Input disabled={loading} type="text" name="cpf" id="cpf" onChange={handleChange} value={form.cpf || ""} placeholder="Informe o cpf" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="telefone">Telefone:</Label>
                                <Input disabled={loading} type="text" name="telefone" id="telefone" onChange={handleChange} value={form.telefone || ""} placeholder="Informe o telefone" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="endereco">Endereço:</Label>
                                <Input disabled={loading} type="text" name="endereco" id="endereco" onChange={handleChange} value={form.endereco || ""} placeholder="Informe o endereço" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="senha">Senha:</Label>
                                <Input disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>

                            <Button color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                                {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Cadastrar"}
                            </Button>
                        </Form >
                    </CardBody>
                    <CardFooter className="text-muted">
                        Já tem acesso ? <Link to="/signin">Faça o Login</Link>
                    </CardFooter>

                </Card>
            </Col>
        </Sign>
    )
}

export default SignUp;

