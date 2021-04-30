import { BsListTask } from 'react-icons/bs'
import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TableList = ({ usuarios }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
            <Table>
                <thead>
                    <tr>
                        <th>NOME RESPONSÁVEL</th>
                        <th>TELEFONE RESPONSÁVEL</th>
                        <th>E-MAIL RESPONSÁVEL </th>
                        <th>NOME PARTICIPANTE</th>
                        <th>IDADE PARTICIPANTE</th>

                    </tr>
                </thead>
                <tbody>
                    {usuarios?.map((usuarios, i) => (
                        <tr key={i}>
                            <td>{usuarios.nomeusuario}</td>
                            <td>{usuarios.telefone}</td>
                            <td>{usuarios.email}</td>
                            <td>{usuarios.nomeparticipante}</td>
                            <td>{calcularIdade(new Date(usuarios.datanascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' }))} anos</td>
                            <td>{usuarios.inscricoes.length > 0 ? (<div onClick={toggle} style={{ cursor: 'pointer' }}><BsListTask /></div>) : ""}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

export default TableList;
