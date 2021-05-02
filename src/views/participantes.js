import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { BsListTask } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { getUsuariosAll } from '../store/participante/participante.action';
import { TitlePage } from "../assets/styled";

const GerenciarUsuarios = () => {
    document.title = "Casa da Dinda";
    const dispatch = useDispatch()
    const usuarios = useSelector(state => state.usuario.all)
    const [modal, setModal] = useState({
        status: false,
        data: {}
    });

    const toggle = (data = {}) => setModal({
        status: !modal.status,
        data: data
    })

    useEffect(() => {
        dispatch(getUsuariosAll());
    }, [dispatch])


    function calcularIdade(aniversario) {
        var nascimento = aniversario.split("/");
        var dataNascimento = new Date(parseInt(nascimento[2], 10),
            parseInt(nascimento[1], 10) - 1,
            parseInt(nascimento[0], 10));

        var diferenca = Date.now() - dataNascimento.getTime();
        var idade = new Date(diferenca);

        return Math.abs(idade.getUTCFullYear() - 1970);
    }

    return (
        <>
         <TitlePage>
                Participantes
            </TitlePage>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do responsável</th>
                        <th>Telefone do responsável</th>
                        <th>E-mail do responsável</th>
                        <th>Nome do participante</th>
                        <th>Idade do participante</th>
                        <th>Ação</th>

                    </tr>
                </thead>
                <tbody>
                    {usuarios?.map((usuario, i) => (
                        <tr key={i}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nomeusuario}</td>
                            <td>{usuario.telefone}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.nomeparticipante}</td>
                            <td>{calcularIdade(new Date(usuario.datanascimentoparticipante).toLocaleDateString('pt-BR', { timeZone: 'UTC' }))} anos</td>
                            <td>{usuario.inscricoes.length > 0 ? (<div onClick={() => toggle(usuario)} style={{ cursor: 'pointer' }}><BsListTask /></div>) : ""} </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <Modal isOpen={modal.status} toggle={toggle} >
                <ModalHeader toggle={toggle}>Inscrito na(s) Oficina(s)</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome da oficina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modal.data?.inscricoes?.map((v, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v.oficinas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ModalBody>

            </Modal>

        </>
    )
}


export default GerenciarUsuarios;
