import { Button, Col, Label, Row, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOficina } from '../../store/oficina/oficina.action';
import ReactSwal from '../../plugins/swal';

const FormOficina = (props) => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const formatDate = (data) => {
        const [y, m, d] = data.split('-')
        return `${d}/${m}/${y}`
    }

    const handleSubmit = () => {
        const nForm = {
            ...form,
            dataoficina: formatDate(form.dataoficina)
        }

        dispatch(createOficina(nForm))

        ReactSwal.fire({
            icon: 'success',
            title: `Oficina ${form.name} cadastrado com sucesso !`,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 4000,
        })
        setForm({});

        setTimeout(() => {
            props.setIsForm(false)
        }, 4000);
    }


    return (
        <BoxInscricao>
            <Col xs="12" sm="12" md="8" lg="8">
                <FormGroup>
                    <Label for="name">Nome da oficina</Label>
                    <Input type="text" id="name" value={form.name || ""} onChange={handleChange}
                        name="name" placeholder="Insira seu nome" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Nome do Coordenador</Label>
                    <Input type="text" id="coordinator" value={form.coordinator || ""} onChange={handleChange}
                        name="coordinator" placeholder="Insira do coordinator" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Data de Início</Label>
                    <Input type="date" id="start_date" value={form.start_date || ""} onChange={handleChange}
                        name="start_date" />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={handleSubmit}>Cadastrar</Button>
                </FormGroup>
            </Col>
        </BoxInscricao>
    )

}

export default FormOficina;


const BoxInscricao = styled(Row)``
