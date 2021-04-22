import { useState } from 'react';
import { createServiceOficinas } from '../../services/oficinas.service';
import { Button, 
         Row, 
         Col, 
         FormGroup, 
         Label, 
         Input 
        } from 'reactstrap';
import styled from 'styled-components';
import ReactSwal from '../../plugins/alert';



const Inscricao = ({ id, update, isForm }) => {

    const [form, setForm] = useState({})

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = () => {

        const nform = {
            ...form
        }
        
        createServiceOficinas (id, nform)
        .then(() => {
            ReactSwal.fire({
                icon: 'success',
                title: `Participante ${form.nomeparticipante} cadastrado com sucesso!`,
                showConfirmButton: false,
                showCloseButton: true,
            })
            setForm({});
            update(true);
            isForm(false);
        })
        .catch(erro => console.log('Preencha todos os campos!'))
    }

 
    return (

        <BoxInscricao>
            <Col xs="12" sm="12" md="8" lg="8">
                <SFormGroup>
                    <Label for="nomeparticipante">Nome do Participante</Label>
                    <Input type="text" id="nomeparticipante" value={form.nomeparticipante || ""} onChange={handleChange} 
                    name="nomeparticipante" placeholder="Nome do participante" className="text-uppercase" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="datanascimentoparticipante">Data de Nascimento</Label>
                    <Input type="date" id="datanascimentoparticipante" value={form.datanascimentoparticipante || ""} onChange={handleChange}
                    name="datanascimentoparticipante" placeholder="Data de nascimento" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="nomeresponsavel">Nome do Responsável</Label>
                    <Input type="text" id="nomeresponsavel" value={form.nomeresponsavel || ""} onChange={handleChange} 
                    name="nomeresponsavel" placeholder="Nome do responsável" className="text-uppercase" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="telefonecontato">Telefone de Contato</Label>
                    <Input type="tel" id="telefonecontato" value={form.telefonecontato || ""} onChange={handleChange} 
                    name="telefonecontato" placeholder="Telefone de contato" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="telefonemergencia">Telefone de Emergência</Label>
                    <Input type="tel" id="telefonemergencia" value={form.telefonemergencia || ""} onChange={handleChange} 
                    name="telefonemergencia" placeholder="Telefone de emergência" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="cpfresponsavel">CPF do Responsável</Label>
                    <Input type="text" id="cpfresponsavel" value={form.cpfresponsavel || ""} onChange={handleChange}
                    name="cpfresponsavel" placeholder="CPF do responsável" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="emailresponsavel">E-mail</Label>
                    <Input type="email" id="emailresponsavel" value={form.emailresponsavel || ""} onChange={handleChange} 
                     name="emailresponsavel" placeholder="E-mail" className="text-lowercase" />
                </SFormGroup>
                <SFormGroup>
                    <Label for="enderecoresponsavel">Endereço</Label>
                    <Input type="text" id="enderecoresponsavel" value={form.enderecoresponsavel || ""} onChange={handleChange}
                     name="enderecoresponsavel" placeholder="Endereço"/>
                </SFormGroup>
                <SFormGroup>
                    <Label for="observacoes">Observações</Label>
                    <Input type="text" id="observacoes" value={form.observacoes || ""} onChange={handleChange}
                     name="observacoes" placeholder="Observações"/>
                </SFormGroup>

                <FormGroup>
                    <Button color="info" onClick={submitForm}>Inscrever</Button>
                </FormGroup>
            </Col>
        </BoxInscricao>
    )
}

export default Inscricao;


const BoxInscricao = styled(Row)`

    button {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        margin-bottom: 10px 0;
    }
`

const SFormGroup = styled(FormGroup)`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;

    label {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }

    input {
    background-color: #e4fbff;
    width: 100%;
    margin-top: 1px;
    padding: 5px;
    border-style: none;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: #16697a;
    }
`


