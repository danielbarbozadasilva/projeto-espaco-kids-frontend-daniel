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
            title: `Oficina ${form.nomeoficina} cadastrado com sucesso !`,
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
                    <Label for="nomeoficina">Nome da oficina</Label>
                    <Input type="text" id="nomeoficina" value={form.nomeoficina || ""} onChange={handleChange}
                        name="nomeoficina" placeholder="Insira o nome da oficina" />
                </FormGroup>
                <FormGroup>
                    <Label for="urlimagemoficina">URL da imagem</Label>
                    <Input type="text" id="urlimagemoficina" value={form.urlimagemoficina || ""} onChange={handleChange}
                        name="urlimagemoficina" placeholder="Insira url da imagem" />
                </FormGroup>
                <FormGroup>
                    <Label for="dataoficina">Data da oficina</Label>
                    <Input type="date" id="dataoficina" value={form.dataoficina || ""} onChange={handleChange}
                        name="dataoficina" />
                </FormGroup>
                <FormGroup>
                    <Label for="horaoficina">Horário da oficina</Label>
                    <Input type="text" id="horaoficina" value={form.horaoficina || ""} onChange={handleChange}
                        name="horaoficina" placeholder="Insira a hora da oficina" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Preço da oficina</Label>
                    <Input type="text" id="valoroficina" value={form.valoroficina || ""} onChange={handleChange}
                        name="valoroficina" placeholder="Insira o valor" />
                </FormGroup>
                <FormGroup>
                    <Label for="nomemonitor">Nome do monitor</Label>
                    <Input type="text" id="nomemonitor" value={form.nomemonitor || ""} onChange={handleChange}
                        name="nomemonitor" placeholder="Insira o nome do monitor" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Descrição da oficina</Label>
                    <Input type="text" id="descricaoficina" value={form.descricaoficina || ""} onChange={handleChange}
                        name="descricaoficina" placeholder="Insira a descrição da oficina"/>
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
