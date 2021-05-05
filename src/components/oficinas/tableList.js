import { Table, Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import {useState, useSelector} from 'react';
import './style.css';

const TableList = (props) => {

    const { oficinas, editarOficina, excluirOficina, mostraParticipante } = props

    // const usuarios = useSelector(state => state.usuario.all)
    const [modal, setModal] = useState({
        status: false,
        data: {}
    });

    const toggle = (data = {}) => setModal({
        status: !modal.status,
        data: data
    })

    console.log("Console:   ",oficinas)
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
                        <td>{new Date(oficinas.dataoficina).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                        <td>{oficinas.horaoficina}</td>
                        <td>{'R$' + (oficinas.valoroficina).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</td>
                        <td>{oficinas.nomemonitor}</td>

                        <td>
                            <Button size="sm" className="botaoTabela" color="info" style={{ cursor: "pointer" }} onClick={() => mostraParticipante(oficinas.codoficina)}>Detalhes</Button>
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
