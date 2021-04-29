import { Table } from 'reactstrap'
import { BiTrash, BiEdit } from 'react-icons/bi'

const TableList = ( props ) => {

    const { oficinas, editarOficina, excluirOficina } = props

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME DA OFICINA</th>
                </tr>
            </thead>
            <tbody>
                {oficinas?.map((oficinas, i) => (
                    <tr key={i}>
                        <th scope="row">{oficinas.codoficina}</th>
                        <td>{oficinas.nomeoficina}</td>
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
