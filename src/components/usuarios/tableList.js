import { BsListTask } from 'react-icons/bs'
import React from 'react'
import { Table } from 'reactstrap'
import { calcularIdade } from '../../views/participantes'

const TableList = ({ usuarios }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nome do responsável</th>
            <th>Telefone do responsável</th>
            <th>E-mail do responsável</th>
            <th>Nome do participante</th>
            <th>Idade do participante</th>
          </tr>
        </thead>
        <tbody>
          {usuarios?.map((usuarios, i) => (
            <tr key={i}>
              <td>{usuarios.nomeusuario}</td>
              <td>{usuarios.telefone}</td>
              <td>{usuarios.email}</td>
              <td>{usuarios.nomeparticipante}</td>
              <td>{calcularIdade(new Date(usuarios.datanascimentoparticipante).toLocaleDateString('pt-BR', { timeZone: 'UTC' }))} anos</td>
              <td>{usuarios.inscricoes.length > 0 ? (<div onClick={toggle} style={{ cursor: 'pointer' }}><BsListTask /></div>) : ''}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableList
