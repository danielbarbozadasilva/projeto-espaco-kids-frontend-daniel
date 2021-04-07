
import { useParams } from 'react-router';
import { deleteServiceOficinas } from '../../services/oficinas.service';
import { useState } from 'react';
import { Table, 
         Button, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter,
         } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';        
import ReactSwal from '../../plugins/alert';


const Tabela = ({inscritos, update}) => {

    console.log(inscritos);

    const { id: id_oficinas } = useParams(); // rename id para id_oficinas

    const [modal, setModal] = useState({
        isOpen: false,
        data: null
    })


    const apagarInscricao = () => {
        if (modal.data.id) {
            deleteServiceOficinas(id_oficinas, modal.data.id)
            .then(() => {
                ReactSwal.fire({
                    icon: 'success',
                    title: `Participante ${modal?.data?.nomeparticipante?.split(" ")[0]} excluído com sucesso!`,
                    showConfirmButton: false,
                    showCloseButton: true,
                })
                update(true)
            })
            .catch(erro => console.log('Tente novamente!'))
        }    
    }


    // const toggleModal = (data = null) => {
    //     setModal({
    //         isOpen: !modal.isOpen,
    //         data
    //     })
    // }

    const openModal = (data = null) => {
      setModal({
        isOpen: true,
        data
       })
    }

    const toggleModal = () => {
       setModal({
        isOpen: false,
        data: null
       })
    }


    return (
        <div>
            {inscritos && inscritos.length ? ( 
                <div>
                    <STable responsive size="sm">
                        <thead>
                            <TableTr>
                                <th>Participante</th>
                                <th>Nascimento</th>
                                <th>Responsável</th>
                                <th>Telefone</th>
                                {/* <th>Telefone Emergência</th> */}
                                {/* <th>CPF Responsável</th> */}
                                <th>E-mail</th>
                                <th>Endereço</th>
                                <th>Observações</th>
                                <th>Ações</th>
                            </TableTr>
                        </thead>
                        <tbody>
                            {inscritos && inscritos.map((valores, indice) => (
                                <TableTr key={indice}>
                                    <td>{valores.nomeparticipante}</td>
                                    <td>{ new Date(valores.datanascimentoparticipante).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) }</td> 
                                    <td>{valores.nomeresponsavel}</td>
                                    <td>{valores.telefonecontato}</td>
                                    {/* <td>{valores.telefonemergencia}</td> */}
                                    {/* <td>{valores.cpfresponsavel}</td> */}
                                    <td>{valores.emailresponsavel}</td>
                                    <td>{valores.enderecoresponsavel}</td>
                                    <td>{valores.observacoes}</td>
                                    
                                    <td>
                                        <Button alt="Cancelar a Inscrição" size="sm" className="text-warning" color="link" onClick={() => openModal(valores)}><FaTrash size="20" /></Button>
                                    </td>
                                </TableTr>
                            ))}
                        </tbody>
                    </STable>

                    <Modal isOpen={modal.isOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>Excluir</ModalHeader>
                        <ModalBody>
                            Deseja Excluir o Participante <strong>{modal?.data?.nomeparticipante?.split(" ")[0]}</strong> ?
                        </ModalBody>
                        
                        <ModalFooter>                            
                            <Button size="sm" color="danger" onClick={apagarInscricao}>Sim</Button>
                            <Button size="sm" color="warning" onClick={toggleModal}>Não</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                ) : (
                    <div className="noparticipants">Nenhum participante cadastrado!</div> 
                )}
        </div>
       )
}

export default Tabela;

const STable = styled(Table)`
   font-family: 'Raleway', sans-serif;
   margin-bottom: 50px;
`
const TableTr = styled.tr`

    th {
        background-color: #e4fbff;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 10px 10px 0 0;
        :nth-child(n){min-width: 100px; text-align: center;}
        :nth-child(1){min-width: 150px}
        :nth-child(3){min-width: 150px}
        :nth-child(7){min-width: 150px}
    }

    td {
        font-size: 14px;
        text-align: center;
        font-weight: 600;
        :nth-child(1){ text-transform: uppercase;}
        :nth-child(3){ text-transform: uppercase;}
        :nth-child(5){ text-transform: lowercase;
    }

    .text-warning {
        color: #7868e6 !important;
    }
`


