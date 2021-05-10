import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
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


    function calcularIdade(data) {
        var now = new Date();
    
        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();
        var dob = new Date(data.substring(6,10),
                data.substring(3,5)-1,                    
                 data.substring(0,2)                
                );
    
        var yearDob = dob.getYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
        var yearAge = yearNow - yearDob;
    
        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow -monthDob;
        }
    
        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            var dateAge = 31 + dateNow - dateDob;
    
            if (monthAge < 0) {
              monthAge = 11;
              yearAge--;
            }
          }
    
        age = {
                years: yearAge,
                months: monthAge,
                days: dateAge
            };
        return age.years;
    }

    return (
        <>
         <TitlePage>
                Participantes
            </TitlePage>

            <Table className="tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome responsável</th>
                        <th>Telefone responsável</th>
                        <th>E-mail responsável</th>
                        <th>Nome participante</th>
                        <th>Idade participante</th>
                        <th>Qtd. Oficinas</th>
                        <th>Ação</th>

                    </tr>
                </thead>
                <tbody>
                    {usuarios?.map((usuario, i) => (
                        <tr className="tabelaParticipante" key={i}>
                            <td data-label="ID">{usuario.id}</td>
                            <td data-label="Nome responsável">{usuario.nomeusuario}</td>
                            <td data-label="Telefone responsável">{usuario.telefone}</td>
                            <td data-label="E-mail responsável">{usuario.email}</td>
                            <td data-label="Nome participante">{usuario.nomeparticipante}</td>
                            <td data-label="Idade participante">{calcularIdade(new Date(usuario.datanascimentoparticipante).toLocaleDateString('pt-BR', { timeZone: 'UTC' }))} anos</td>
                            <td data-label="Qtd. Oficinas">{usuario.inscricoes.length}</td>
                            <td data-label="Ação">{usuario.inscricoes.length > 0 ? (<div onClick={() => toggle(usuario)} style={{ cursor: 'pointer' }}> <Button className="estilo-botao-details" size="sm">Oficinas</Button></div>) : ""} </td>

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
                                    <td>{v.oficinas.oficina_id}</td>
                                    <td>{v.oficinas.nomeoficina}</td>
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
