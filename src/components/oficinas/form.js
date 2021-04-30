import { Col, Label, Row, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const FormOficina = ({state}) => {
    const [form, setForm] = state

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <BoxInscricao>
            <Col xs="12" sm="12" md="12" lg="12">
                <FormGroup>
                    <Label htmlFor="nomeoficina">Nome da oficina</Label>
                    <Input type="text" id="nomeoficina" value={form.nomeoficina || ""} onChange={handleChange}
                        name="nomeoficina" placeholder="Insira o nome da oficina" />
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
                        name="nomemonitor" placeholder="Insira o nome do monitor" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Descrição da oficina</Label>
                    <Input type="text" id="descricaoficina" value={form.descricaoficina || ""} onChange={handleChange}
                        name="descricaoficina" placeholder="Insira a descrição da oficina"/>
                </FormGroup>
            </Col>
        </BoxInscricao>
    )

}

export default FormOficina;


const BoxInscricao = styled(Row)``
