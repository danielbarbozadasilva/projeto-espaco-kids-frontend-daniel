import { Table } from 'reactstrap'
import { BiTrash, BiEdit } from 'react-icons/bi'

const TableList = ( props ) => {

    const { oficinas, editarOficina, excluirOficina } = props


    return (
        <Table>
            <thead>
                <tr>
                    <th>NOME DA OFICINA</th>
                    <th>INSCRITOS</th>
                    <th>DATA</th>
                    <th>HORA</th>
                    <th>PREÇO</th>
                    <th>NOME DO MONITOR</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {oficinas?.map((oficinas, i) => (
                    <tr key={i}>
                        <td>{oficinas.nomeoficina}</td>
                        <td>{oficinas.qtd_inscricoes}</td>
                        <td>{new Date (oficinas.dataoficina).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) }</td>
                        <td>{oficinas.horaoficina}</td>
                        <td>{oficinas.valoroficina}</td>
                        <td>{oficinas.nomemonitor}</td>

                        <td>
                            <BiEdit style={{ cursor: "pointer" }} className="text-info mr-1 font-weight-normal" onClick={() => editarOficina(oficinas.codoficina)} />
                            <BiTrash style={{ cursor: "pointer" }} className="text-danger font-weight-normal" onClick={() => excluirOficina(oficinas)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default TableList;
