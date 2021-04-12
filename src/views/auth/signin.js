import React, { useState } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const SignIn = () => {

    const [hasError, setHasError] = useState(false);


    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error) //[ident. da store] + [ident. do state]

    const [form, setForm] = useState({
        email: "daniel@gmail.com",
        senha: "1234"
    })
    const [submit, setSubmit] = useState(false);

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const closeError = () => setHasError(false);

    const submitForm = () => {
        dispatch(signInAction(form))
    }

    useEffect(() => {
        setHasError(error.length > 0)
        // setTimeout(() => setHasError(false), 4000);
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
                                <Input disabled={submit} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha:</Label>
                                <Input disabled={submit} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>


                            <Button color={submit ? 'secondary' : 'primary'} disabled={submit} size="sm" block onClick={submitForm}>
                                Enviar
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

