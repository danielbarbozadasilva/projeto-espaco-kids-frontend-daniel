
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BiTrash } from 'react-icons/bi'
import { useState } from 'react';
import styled from 'styled-components';
import ReactSwal from '../../plugins/swal';
import { deletarParticipanteOficina } from '../../store/oficina/oficina.action';
import { useDispatch, useSelector } from 'react-redux';

const Tabela = ({ inscricoes }) => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState({
        isOpen: false,
        data: null
    })

    const apagarInscricao = () => {
        if (modal.data.id) {
            dispatch(deletarParticipanteOficina(modal.data.oficina_id, modal.data.id, modal.data.usuario_id))
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
                <div className="colunasFormularios">

                    <Table className="tabela"> 
                        <thead>
                            <tr>
                                <th>Nome do Participante</th>
                                <th>Nascimento</th>
                                <th>E-mail</th>
                                <th>Responsável</th>
                                <th>Telefone</th>
                                <th>Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {inscricoes && inscricoes.map((v, i) => (
                                <tr className="tabelaParticipante" key={i}>
                                    <td data-label="Nome do Participante">{v.usuarios.nomeparticipante}</td>
                                    <td data-label="Nascimento">{new Date(v.usuarios.datanascimentoparticipante).toLocaleDateString()}</td>
                                    <td data-label="E-mail">{v.usuarios.email}</td>
                                    <td data-label="Responsável">{v.usuarios.nomeusuario}</td>
                                    <td data-label="Telefone">{v.usuarios.telefone}</td>
                                    <td data-label="Ações">
                                        <Button alt='Excluir usuário' size="sm" className="estilo-botao"
                                            onClick={() => toggleModal(v)} >Excluir</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
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
                <div id="semAlunos" className="colunasFormularios">Não existem alunos cadastrados</div>
            )}
        </div>
    )
}

export default Tabela;

