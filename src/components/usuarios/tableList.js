import { BsListTask } from 'react-icons/bs'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

    const TableList = ({ usuarios }) => {

      



        return (
            <>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome do responsável</th>
                            <th>Telefone do responsável</th>
                            <th>E-mail do responsável</th>
                            <th>Nome do participante</th>
                            <th>Idade do participante</th>

                        </tr>
                    </thead>
                    <tbody>
                        {usuarios?.map((usuarios, i) => (
                            <tr key={i}>
                                <td>{usuarios.nomeusuario}</td>
                                <td>{usuarios.telefone}</td>
                                <td>{usuarios.email}</td>
                                <td>{usuarios.nomeparticipante}</td>
                                <td>{calcularIdade(new Date(usuarios.datanascimentoparticipante).toLocaleDateString('pt-BR', { timeZone: 'UTC' }))} anos</td>
                                <td>{usuarios.inscricoes.length > 0 ? (<div onClick={toggle} style={{ cursor: 'pointer' }}><BsListTask /></div>) : ""}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal isOpen={modal} >
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


    export default TableList
