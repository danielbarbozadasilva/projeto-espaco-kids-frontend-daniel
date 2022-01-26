import React from 'react'
import { Table } from 'reactstrap'
import { useSelector } from 'react-redux'

const FormInscritos = (props) => {
  const oficinas = useSelector((state) => state.oficina.all)

  return (
    <>
      {oficinas
        ? (
          <div className='colunasFormularios' id='divTabela'>
            <Table className='tabela'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome da oficina</th>
                  <th>Data</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                {oficinas.map((item, i) =>
                  item.inscrito
                    ? (
                      <tr className='tabelaInscritos'>
                        <td data-label='ID'>{item.codoficina}</td>
                        <td data-label='Nome da oficina'>{item.nomeoficina}</td>
                        <td data-label='Data'>
                          {new Date(item.dataoficina).toLocaleDateString('pt-BR', {
                            timeZone: 'UTC'
                          })}
                        </td>
                        <td data-label='Hora'>{item.horaoficina}</td>
                      </tr>
                      )
                    : (
                        ''
                      )
                )}
              </tbody>
            </Table>
          </div>
          )
        : (
            ''
          )}
    </>
  )
}

export default FormInscritos
