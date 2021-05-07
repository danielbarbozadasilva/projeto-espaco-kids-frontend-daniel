import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import * as moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input, Alert, Col, Row, Button, Spinner, FormFeedback } from 'reactstrap';
import '../../assets/css/style.css'


const FormOficina = ({ state }) => {
    const [hasError, setHasError] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const registered = useSelector(state => state.auth.registered)

    const [formValidate, setFormValidate] = useState({});

    const [form, setForm] = state

    const handleChange = (props) => {
        const { value, name } = props.target;
        formValidarCampo(name, value);
        setForm({
            ...form,
            [name]: value,
        });
    }
    const isNotValid = () => {
        const inputs = ['nomeoficina', 'urlimagemoficina', 'dataoficina', 'horaoficina', 'valoroficina', 'nomemonitor', 'descricaoficina']
        const invalid = (label) => !Object.keys(form).includes(label) || form[label].length === 0

        const validacoes = Object.values(formValidate).filter(item => item !== "").length > 0

        return inputs.some(item => invalid(item)) || validacoes

    }
    const formValidarCampo = (nome, valor) => {
        var menssage = "";
        switch (nome) {
            case 'nomeoficina':
                var nomeregex = /\d/g;
                if (nomeregex.test(valor)) {
                    menssage += "Não pode conter números!"
                }
                else if (valor.trim() == "") {
                    menssage += "Não pode ser vazio!"
                }
                else if (valor.length <= 5) {
                    menssage += "Precisa ter mais que 5 caracteres!"
                }
                else if (valor.length > 30) {
                    menssage += "Precisa ter menos que 30 caracteres!"
                }
                break;

            case 'urlimagemoficina':
                if (valor.trim() == "") {
                    menssage += "Nome não pode ser vazio!"
                }
                else if (valor.length <= 5) {
                    menssage += "Precisa ter mais que 5 caracteres!"
                }
                break;

            case 'dataoficina':
                const datanasc = valor.replaceAll("-", "/")

                const dataAtual = moment().format("YYYY/MM/DD");

                if (!moment(datanasc).isValid) {
                    menssage += "Data inválida!"
                }
                else if (moment(datanasc).isBefore(dataAtual)) {
                    menssage += "Data anterior a data atual!"
                }
                break;


            case 'horaoficina':
                if (valor.trim() == "") {
                    menssage += "Não pode ser vazio!"
                }
                break;


            case 'valoroficina':
                var filtraValor = /(?:\.|-|[0-9])*/;


                if (!filtraValor.test(valor)) {
                    menssage += "O valor da oficina é inválido!"

                }
                else if (valor.replace(" ", "") == "") {
                    menssage += "Campo em branco!"
                }
                break;

            case 'nomemonitor':
                if ((valor) === "") {
                    menssage += "Campo em branco!"
                }
                else if (valor.length < 5) {
                    menssage += "Nome precisa ter mais que 5 caracteres!"
                }
                else if (valor.length > 5) {
                    menssage += "Nome precisa ter mais que 12 caracteres!"
                }
                break;


            case 'descricaoficina':
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



    return (
        <BoxInscricao>
            <Col xs="12" sm="12" md="12" lg="12">
                <FormGroup>
                    <Label htmlFor="nomeoficina">Nome da oficina</Label>
                    <Input type="text" id="nomeoficina" value={form.nomeoficina || ""} onChange={handleChange}
                        name="nomeoficina" placeholder="Insira o nome da oficina" minLength="5" maxLength="30" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="urlimagemoficina">URL da imagem</Label>
                    <Input type="text" id="urlimagemoficina" value={form.urlimagemoficina || ""} onChange={handleChange}
                        name="urlimagemoficina" placeholder="Insira url da imagem" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dataoficina">Data da oficina</Label>
                    <Input type="date" id="dataoficina" value={form.dataoficina || ""} onChange={handleChange}
                        name="dataoficina" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="horaoficina">Horário da oficina</Label>
                    <Input type="text" id="horaoficina" value={form.horaoficina || ""} onChange={handleChange}
                        name="horaoficina" placeholder="Insira a hora da oficina" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Preço da oficina</Label>
                    <Input type="text" id="valoroficina" value={form.valoroficina || ""} onChange={handleChange}
                        name="valoroficina" placeholder="Insira o valor" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="nomemonitor">Nome do monitor</Label>
                    <Input type="text" id="nomemonitor" value={form.nomemonitor || ""} onChange={handleChange}
                        name="nomemonitor" placeholder="Insira o nome do monitor" minLength="5" maxLength="12" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Descrição da oficina</Label>
                    <Input type="text" id="descricaoficina" value={form.descricaoficina || ""} onChange={handleChange}
                        name="descricaoficina" placeholder="Insira a descrição da oficina" minLength="16" maxLength="300" />
                </FormGroup>
            </Col>
        </BoxInscricao>
    )

}

export default FormOficina;


const BoxInscricao = styled(Row)``
