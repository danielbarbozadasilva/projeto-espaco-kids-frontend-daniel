
import React, { useState } from 'react';
import {
    Form, Alert, FormGroup, Spinner, Input,
    Card, Col, CardBody, CardHeader,
    Button, CardFooter, Label
} from 'reactstrap';

import { SignStyle } from '../../assets/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {signInAction} from '../../store/auth/auth.action';
import {useDispatch} from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        usuario: "ezer.mello@prof.infnet.edu.br",
        senha: "123423" 
    });

    const [submit, setSubmit] = useState(false);

    const handleChange = (props) => {
        const {value, name} = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const submitForm = () => {
        console.log("Entrou na função submit form")
        /* dispatch é a forma de comunicação do REACT > através
           do react-redux com o REDUX */
        dispatch(signInAction(form));
    }

    return (
        <SignStyle>
            <Col sm={12} md={4} lg={5}>
                <Card>
                    <CardHeader tag="h4" className="text-center">Login</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="email">E-mail</Label>
                                <Input disabled={submit} type="email" name="usuario" id="usuario" onChange={handleChange} value={form.usuario || ""} placeholder="Informe o seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha</Label>
                                <Input disabled={submit} type="password" name="senha" id="usuario" onChange={handleChange} value={form.senha || ""} placeholder="Informe a sua senha" />
                            </FormGroup>

                            <Button color={submit ? 'secondary' : 'primary'} disabled={submit} size="sm" block onClick={submitForm}>
                                {submit ? (
                                    <div className="text-white">
                                        <Spinner size="sm" color="white" />Carregando...
                                    </div>
                                ) : "Entrar"}
                            </Button>
                        </Form>
                    </CardBody>

                    <CardFooter className="text-muted">
                        Não tem cadastro?<Link to="/signup">Cadastre-se</Link>
                    </CardFooter>

                </Card>
            </Col>
        </SignStyle>
    )
}

export default SignIn;
