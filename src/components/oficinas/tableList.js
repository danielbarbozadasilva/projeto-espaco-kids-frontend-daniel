import { Table, Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import {useState, useSelector} from 'react';
import './style.css';

const TableList = (props) => {

    const { oficinas, editarOficina, excluirOficina } = props

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
                            <Button size="sm" className="botaoTabela" color="info" style={{ cursor: "pointer" }} onClick={() => toggle()}>Detalhes</Button>
                            <Button size="sm" className="botaoTabela" color="warning" style={{ cursor: "pointer" }} onClick={() => editarOficina(oficinas.codoficina)}>Editar</Button>
                            <Button size="sm" className="botaoTabela" color="danger" style={{ cursor: "pointer" }} onClick={() => excluirOficina(oficinas)}>Excluir</Button>
                          

                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

// <Modal isOpen={modal.status} toggle={toggle} >
//     <ModalHeader toggle={toggle}>Aluno(s) Inscritos</ModalHeader>
//     <ModalBody>
//         <Table>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Nome do Aluno</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {modal.data?.usuarios?.map((v, i) => (
//                     <tr key={i}>
//                         <td>{i + 1}</td>
//                         <td>{v.nomeparticipante}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Table>
//     </ModalBody>

// </Modal>

export default TableList;
