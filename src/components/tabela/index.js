
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BiTrash } from 'react-icons/bi'
import { useState } from 'react';
import styled from 'styled-components';
import ReactSwal from '../../plugins/swal';
import { deletarParticipanteOficina } from '../../store/oficina/oficina.action';
import { useDispatch } from 'react-redux';

const Tabela = ({ inscricoes }) => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState({
        isOpen: false,
        data: null
    })

    const apagarInscricao = () => {
        if (modal.data.id) {
            dispatch(deletarParticipanteOficina(modal.data.oficina_id, modal.data.id,modal.data.usuario_id))
                .then(() => {
                    ReactSwal.fire({
                        icon: 'success',
                        title: `O Aluno ${modal?.data?.nomeparticipante?.split(" ")[0]} deletado com sucesso !`,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    toggleModal()
                })
                .catch(erro => console.log('Ocorreu um erro!'))
        }
    }

    const toggleModal = (data = null) => {
        setModal({
            isOpen: !modal.isOpen,
            data
        })
    }

    

    return (
        <div>
            {inscricoes && inscricoes.length ? (
                <div>
                    {}
                    <STable responsive striped size="sm">
                        <thead>
                            <TableTr>
                                <th>Nome do Participante</th>
                                <th>Nascimento</th>
                                <th>Email</th>
                                <th>Responsável</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </TableTr>
                        </thead>
                        <tbody>
                            {inscricoes && inscricoes.map((v, i) => (
                                <TableTr key={i}>
                                    <td>{v.usuarios.nomeparticipante}</td>
                                    <td>{new Date(v.usuarios.datanascimentoparticipante).toLocaleDateString()}</td>
                                    <td>{v.usuarios.email}</td>
                                    <td>{v.usuarios.nomeusuario}</td>
                                    <td>{v.usuarios.telefone}</td>
                                    <td>
                                        <Button alt='Excluir usuário' size="sm" className="text-danger" color="link"
                                            onClick={() => toggleModal(v)} ><BiTrash size="20" /></Button>
                                    </td>
                                </TableTr>
                            ))}
                        </tbody>
                    </STable>

                    <Modal isOpen={modal.isOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>Excluir Participante</ModalHeader>
                        <ModalBody>
                            Deseja Excluir o Participante <strong>{modal?.data?.nomeparticipante?.split(" ")[0]}</strong> ?
                        </ModalBody>
                        <ModalFooter>

                            <Button color="primary" onClick={apagarInscricao}>SIM</Button>
                            <Button color="secondary" onClick={toggleModal}>NÃO</Button>
                        </ModalFooter>
                    </Modal>

                
                </div>
            ) : (
                <div>Não existem alunos cadastrados</div>
            )}
        </div>
    )
}

export default Tabela;


const STable = styled(Table)`
    overflow:hidden;
    border-radius: 4px;
    font-size:14px;
`
const TableTr = styled.tr`

    th{
        background-color:#666;
        color: #fff;
        :nth-child(n){ min-width: 200px;}
        :nth-child(1){ min-width: 400px;}
        :nth-child(4){ min-width: 100px;text-align: center;}
    }
    
    
    

    td{
        :nth-child(1){ text-transform: uppercase;}
        :nth-child(3){ text-transform: lowercase;}
        :nth-child(4){ text-align: center;  }
    }

`
