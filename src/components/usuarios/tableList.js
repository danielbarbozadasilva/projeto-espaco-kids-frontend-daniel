import { Table } from 'reactstrap'

const TableList = ({ usuarios }) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME DO USUÁRIO</th>
                </tr>
            </thead>
            <tbody>
                {usuarios?.map((usuarios, i) => (
                    <tr key={i}>
                        <th scope="row">{usuarios.id}</th>
                        <td>{usuarios.nomeusuario}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default TableList;
