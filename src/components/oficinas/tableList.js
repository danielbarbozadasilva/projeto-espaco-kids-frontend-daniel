import { Table } from 'reactstrap'
import { BiTrash, BiEdit } from 'react-icons/bi'

const TableList = ( props ) => {

    const { oficinas, editarOficina, excluirOficina } = props


    return (
        <Table>
            <thead>
                <tr>
                    <th>Nome da Oficina</th>
                    <th>Inscritos</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Preço</th>
                    <th>Nome do Monitor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {oficinas?.map((oficinas, i) => (
                    <tr key={i}>
                        <td>{oficinas.nomeoficina}</td>
                        <td>{oficinas.qtd_inscricoes}</td>
                        <td>{new Date (oficinas.dataoficina).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) }</td>
                        <td>{oficinas.horaoficina}</td>
                        <td>{'R$'+(oficinas.valoroficina).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}</td>
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
