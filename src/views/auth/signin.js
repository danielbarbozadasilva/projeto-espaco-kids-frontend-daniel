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
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)

    const [form, setForm] = useState({
        usuario: "liniker.silva@prof.infnet.edu.br",
        senha: "123123"
    })
    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const closeError = () => setHasError(false);

    const submitForm = (event) => {
        event.preventDefault()
        dispatch(signInAction(form))
    }

    const isNotValid = () => form.usuario.length === 0 || form.senha.length === 0


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
                <Card>
                    <CardHeader tag="h4" className="text-center">Login</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input disabled={loading} type="email" name="usuario" id="usuario" onChange={handleChange} value={form.usuario || ""} placeholder="Informe seu E-mail" />
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

