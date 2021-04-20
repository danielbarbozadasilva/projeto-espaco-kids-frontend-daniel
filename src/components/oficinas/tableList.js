import { Table } from 'reactstrap'

const TableList = ({ oficina }) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME DA OFICINA</th>
                </tr>
            </thead>
            <tbody>
                {oficina?.map((oficinas, i) => (
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
