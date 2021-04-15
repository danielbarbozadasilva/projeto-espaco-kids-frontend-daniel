import React, { useState } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert, Spinner
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SignIn = () => {


    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();
    
    // vindo do reducer (tudo que tiver 'state' pega o estado do reducer)
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)

    // estado somente da view
    const [form, setForm] = useState({
        email: "taina@gmail.com",
        senha: "4534555"
    })

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,

            //pega o name dos inputs, o name é um array, para cada indice'[]' para cada indice vou inserir um valor e atribui no name
            [name]: value,
        });
    };

    const closeError = () => setHasError(false);

    const submitForm = (event) => {
        event.preventDefault()

        // manda para o action o meu estado com os dados e depois manda para o 'reducer'
        dispatch(signInAction(form))
    }

    const isNotValid = () => form.email.length === 0 || form.senha.length === 0


    useEffect(() => {
        setHasError(error.length > 0)
    }, [error])


    return (
        <Sign>
            <Col sm={12} md={4} lg={5}>
                <Alert color="danger" isOpen={hasError} toggle={closeError}>
                    <div><strong>OPS !!! </strong> Aconteceu um erro.</div>
                    <small>Verifique usuário e senha</small>
                </Alert>
                {/* <Alert color="success" isOpen={success} toggle={() => showSuccess(!success)}>
                    <div><strong>Usuario </strong> Cadastrado com sucesso.</div>
                </Alert> */}
                <Card>
                    <CardHeader tag="h4" className="text-center">Login</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha:</Label>
                                <Input disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>
                            <Button color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                                {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Enviar"}
                            </Button>
                        </Form >
                    </CardBody>
                    <CardFooter className="text-muted">
                        Não tem Cadastro? <Link to="/signup">Cadastre-se</Link>
                    </CardFooter>

                </Card>
            </Col>
        </Sign>
    )
}

export default SignIn;

