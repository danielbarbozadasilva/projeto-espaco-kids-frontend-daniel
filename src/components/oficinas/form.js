import React, { useState } from 'react'
import styled from 'styled-components'
import * as moment from 'moment'
import { useSelector } from 'react-redux'
import { FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap'
import '../../assets/css/style.css'

const FormOficina = ({ state, setIsValido }) => {
  const loading = useSelector((state) => state.auth.loading)
  const [formValidate, setFormValidate] = useState({})
  const [form, setForm] = state

  const handleChange = (props) => {
    const { value, name } = props.target
    const validarResult = formValidarCampo(name, value)
    const validarCampos = { ...form, [name]: value }
    setForm(validarCampos)
    isNotValid(validarResult, validarCampos)
  }
  const isNotValid = (validarResult, validarCampos) => {
    const inputs = [
      'nomeoficina',
      'urlimagemoficina',
      'dataoficina',
      'horaoficina',
      'valoroficina',
      'nomemonitor',
      'descricaoficina'
    ]
    const invalid = (label) =>
      !Object.keys(validarCampos).includes(label) ||
      validarCampos[label].length === 0
    const validacoes =
      Object.values(validarResult).filter((item) => item !== '').length > 0
    const valor = inputs.some((item) => invalid(item)) || validacoes
    setIsValido(valor)
  }

  const formValidarCampo = (nome, valor) => {
    let menssage = ''
    switch (nome) {
      case 'nomeoficina':
        var nomeregex = /\d/g
        if (nomeregex.test(valor)) {
          menssage += 'Não pode conter números!'
        } else if (valor.trim() === '') {
          menssage += 'Não pode ser vazio!'
        } else if (valor.length < 5) {
          menssage += 'Precisa ter mais que 5 caracteres!'
        } else if (valor.length > 30) {
          menssage += 'Precisa ter menos que 30 caracteres!'
        }
        break

      case 'urlimagemoficina':
        if (valor.trim() === '') {
          menssage += 'URL não pode ser vazia!'
        } else if (valor.length < 5) {
          menssage += 'Precisa ter mais que 5 caracteres!'
        }
        break

      case 'dataoficina':
        const datanasc = valor.replaceAll('-', '/')
        const dataAtual = moment().format('YYYY/MM/DD')

        if (!moment(datanasc).isValid) {
          menssage += 'Data inválida!'
        } else if (moment(datanasc).isBefore(dataAtual)) {
          menssage += 'Data anterior a data atual!'
        }
        break

      case 'horaoficina':
        if (valor.trim() === '') {
          menssage += 'Não pode ser vazio!'
        }
        break

      case 'valoroficina':
        var invalido = /\d/g

        if (!invalido.test(valor)) {
          menssage += 'O valor da oficina é inválido!'
        } else if (valor.replace(' ', '') === '') {
          menssage += 'Campo em branco!'
        }
        break

      case 'nomemonitor':
        var nomeregex = /\d/g
        if (nomeregex.test(valor)) {
          menssage += 'Não pode conter números!'
        } else if (valor === '') {
          menssage += 'Campo em branco!'
        } else if (valor.length < 5) {
          menssage += 'Nome precisa ter mais que 5 caracteres!'
        } else if (valor.length > 12) {
          menssage += 'Nome precisa ter menos que 12 caracteres!'
        }
        break

      case 'descricaoficina':
        if (valor.replace(' ', '') === '') {
          menssage += 'Campo em branco!'
        } else if (valor.length < 16) {
          menssage += 'A descrição precisa ter mais que 16 caracteres!'
        } else if (valor.length > 300) {
          menssage += 'Nome precisa ter menos que 300 caracteres!'
        }
        break
    }
    const validacao = { ...formValidate, [nome]: menssage }
    setFormValidate(validacao)

    return validacao
  }

  return (
    <BoxInscricao>
      <Col xs='12' sm='12' md='12' lg='12'>
        <FormGroup>
          <Label htmlFor='nomeoficina'>Nome da oficina</Label>
          <Input
            type='text'
            id='nomeoficina'
            value={form.nomeoficina || ''}
            onChange={handleChange}
            name='nomeoficina'
            placeholder='Insira o nome da oficina'
            minLength='5'
            maxLength='30'
            invalid={!!formValidate.nomeoficina}
            disabled={loading}
          />
          <FormFeedback>{formValidate.nomeoficina || ''}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='urlimagemoficina'>URL da imagem</Label>
          <Input
            type='text'
            id='urlimagemoficina'
            value={form.urlimagemoficina || ''}
            onChange={handleChange}
            name='urlimagemoficina'
            placeholder='Insira url da imagem'
            invalid={!!formValidate.urlimagemoficina}
            disabled={loading}
          />
          <FormFeedback>{formValidate.urlimagemoficina || ''}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='dataoficina'>Data da oficina</Label>
          <Input
            type='date'
            id='dataoficina'
            value={form.dataoficina || ''}
            onChange={handleChange}
            name='dataoficina'
            invalid={!!formValidate.dataoficina}
            disabled={loading}
          />
          <FormFeedback>{formValidate.dataoficina || ''}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='horaoficina'>Horário da oficina</Label>
          <Input
            type='text'
            id='horaoficina'
            value={form.horaoficina || ''}
            onChange={handleChange}
            name='horaoficina'
            placeholder='Insira a hora da oficina'
            invalid={!!formValidate.horaoficina}
            disabled={loading}
          />
          <FormFeedback>{formValidate.horaoficina || ''}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='name'>Preço da oficina</Label>
          <Input
            type='text'
            id='valoroficina'
            value={form.valoroficina || ''}
            onChange={handleChange}
            name='valoroficina'
            placeholder='Insira o valor'
            invalid={!!formValidate.valoroficina}
            disabled={loading}
          />
          <FormFeedback>{formValidate.valoroficina || ''}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='nomemonitor'>Nome do monitor</Label>
          <Input
            type='text'
            id='nomemonitor'
            value={form.nomemonitor || ''}
            onChange={handleChange}
            name='nomemonitor'
            placeholder='Insira o nome do monitor'
            minLength='5'
            maxLength='12'
            invalid={!!formValidate.nomemonitor}
            disabled={loading}
          />
          <FormFeedback>{formValidate.nomemonitor || ''}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='name'>Descrição da oficina</Label>
          <Input
            type='text'
            id='descricaoficina'
            value={form.descricaoficina || ''}
            onChange={handleChange}
            name='descricaoficina'
            placeholder='Insira a descrição da oficina'
            minLength='16'
            maxLength='300'
            invalid={!!formValidate.descricaoficina}
            disabled={loading}
          />
          <FormFeedback>{formValidate.descricaoficina || ''}</FormFeedback>
        </FormGroup>
      </Col>
    </BoxInscricao>
  )
}

export default FormOficina

const BoxInscricao = styled(Row)``
