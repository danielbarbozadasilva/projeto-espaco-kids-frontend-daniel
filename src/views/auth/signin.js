import React, { useState } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert, Spinner
} from 'reactstrap';
import styled from 'styled-components';

import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../../assets/css/style.css';



const SignIn = () => {
    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();

    // vindo do reducer (tudo que tiver 'state' pega o estado do reducer)
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)

    // estado somente da view
    const [form, setForm] = useState({
        email:"",
        senha:"" 
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
    
                <SCard>
                    <h2 tag="h4" className="text-login">Login</h2>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <label className="label" for="email">E-mail:</label>
                                <Input className="form-control" disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <label className="label" for="password">Senha:</label>
                                <input className="form-control" disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>
                            <button data-testing-id="funnel-survey-select_category-next" class="rounded-full px-6 py-2 shadow-redBtn hover:bg-gradient-l-primary-gradient-solid hover:text-white hover:border-none
            bg-gradient-l-primary-gradient text-white font-bold border-none
            " type="button" color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                                {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Enviar"}

                                <i className="icon-angle-right ml-2"></i>  </button>

                        </Form >
                    </CardBody>
                    <CardFooter className="text-muted">
                        Não tem Cadastro? <Link to="/signup">Cadastre-se</Link>
                    </CardFooter>

                </SCard>
            </Col>
        </Sign>
    )
}

export default SignIn;

const SCard = styled(Card)`
    margin: 100px 0;
    box-shadow: 0px 2px 15px 6px rgba(0,0,0,0.11);
    padding-top: 10px;

`

