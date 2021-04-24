
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BiTrash } from 'react-icons/bi'
import { useState } from 'react';
import styled from 'styled-components';
import ReactSwal from '../../plugins/swal';
import { deletarParticipanteOficina } from '../../store/oficina/oficina.action';
import { useDispatch } from 'react-redux';

const Tabela = ({ inscritos }) => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState({
        isOpen: false,
        data: null
    })

    const apagarInscricao = () => {
        if (modal.data.id) {
            dispatch(deletarParticipanteOficina(modal.data.id))
                .then(() => {
                    ReactSwal.fire({
                        icon: 'success',
                        title: `O Aluno ${modal?.data?.name?.split(" ")[0]} deletado com sucesso !`,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    toggleModal()
                })
                .catch(erro => console.log('deu ruim...'))
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
            {inscritos && inscritos.length ? (
                <div>
                    <STable responsive striped size="sm">
                        <thead>
                            <TableTr>
                                <th>Nome</th>
                                <th>Nascimento</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </TableTr>
                        </thead>
                        <tbody>
                            {inscritos && inscritos.map((v, i) => (
                                <TableTr key={i}>
                                    <td>{v.nomeparticipante}</td>
                                    <td>{new Date(v.datanascimento).toLocaleDateString()}</td>
                                    <td>{v.email}</td>
                                    <td>

                                        <Button alt='Excluir usuário' size="sm" className="text-danger" color="link"
                                            onClick={() => toggleModal(v)} ><BiTrash size="20" /></Button>
                                    </td>
                                </TableTr>
                            ))}
                        </tbody>
                    </STable>

                    <Modal isOpen={modal.isOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>Excluir Aluno</ModalHeader>
                        <ModalBody>
                            Deseja Excluir o Aluno <strong>{modal?.data?.nomeparticipante?.split(" ")[0]}</strong> ?
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
    font-family: 'Roboto', sans-serif;
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
