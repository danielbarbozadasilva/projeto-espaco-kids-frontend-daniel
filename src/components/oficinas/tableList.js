import { Table, Button } from 'reactstrap'
import './style.css';

const TableList = (props) => {

    const { oficinas, editarOficina, excluirOficina, mostraParticipante } = props    

    return (
        <Table className="tabela">
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
                    <tr className="tabelaParticipante" key={i}>
                        <td data-label="Nome da oficina">{oficinas.nomeoficina}</td>
                        <td data-label="Inscritos">{oficinas.qtd_inscricoes}</td>
                        <td data-label="Data">{new Date(oficinas.dataoficina).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                        <td data-label="Hora">{oficinas.horaoficina}</td>
                        <td data-label="Preço">{'R$' + (oficinas.valoroficina).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</td>
                        <td data-label="Nome do Monitor">{oficinas.nomemonitor}</td>

                        <td className="espacoTabela" data-label="Ações">{oficinas.qtd_inscricoes  > 0 ? (
                            <Button size="sm" className="botaoTabela" color="info" style={{ cursor: "pointer" }} onClick={() => mostraParticipante(oficinas.codoficina)}>Alunos</Button>) :  <span id="botaoEspaco"></span>} 
                            <Button size="sm" className="botaoTabela" color="warning" style={{ cursor: "pointer" }} onClick={() => editarOficina(oficinas.codoficina)}>Editar</Button>
                            <Button size="sm" className="botaoTabela" color="danger" style={{ cursor: "pointer" }} onClick={() => excluirOficina(oficinas)}>Excluir</Button>
                           </td>

                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default TableList;
