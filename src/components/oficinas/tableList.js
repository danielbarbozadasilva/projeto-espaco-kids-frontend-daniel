import { Table } from 'reactstrap'

const TableList = ({ oficinas }) => {

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
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default TableList;