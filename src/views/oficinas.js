import React, { useEffect, useState } from 'react';
import { TitlePage } from "../assets/styled";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getOficinasAll, deletarOficina, createOficina, getDetails, updateOficina } from '../store/oficina/oficina.action';
import TableList from '../components/oficinas/tableList';
import FormOficina from '../components/oficinas/form';
import ReactSwal from '../plugins/swal';
import moment from 'moment';
import FormInscritos from '../components/oficinas/form_inscritos';

const GerenciarOficinas = () => {
    document.title = "Casa da Dinda";

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [modalAluno, setModalAluno] = useState({ isOpen: false, data: {} })

    const [isUpdate, setUpdate] = useState(false)
    const stateForm = useState({})
    const [form, setForm] = stateForm

    // store
    const oficinas = useSelector(state => state.oficina.all)
    const detalhe = useSelector(state => state.oficina.details)

    const toggle = (hadEvent) => {
        if (hadEvent) {
            setUpdate(false)
            // Caso tenha evento ele zera o form
            setForm({})
        }
        setModal(!modal)
    };
    const toggleModalAluno = (hadEvent) => {

        setModalAluno({ ...modalAluno, isOpen: !modalAluno.isOpen })
    };
    useEffect(() => {
        dispatch(getOficinasAll());
    }, [dispatch])


    const mostraParticipante = (codoficina) => {
        dispatch(getDetails(codoficina))
            .then(() => {

                setModalAluno({
                    ...modalAluno,
                    data: detalhe,
                    isOpen: true
                })

            })
    }

    const editTable = (codoficina) => {
        dispatch(getDetails(codoficina))
            .then(() => {
                setForm({ ...form, codoficina })
                setUpdate(true)
                toggle()
            })
    }

    const deleteTable = (oficinas) => {

        ReactSwal.fire({
            title: `Deseja excluir a oficina ${oficinas.nomeoficina}?`,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            cancelButtonText: `Não`,
        }).then((result) => {

            if (result.isConfirmed) {
                dispatch(deletarOficina(oficinas.codoficina))
                    .then(() => {
                        ReactSwal.fire({
                            icon: 'success',
                            title: `A oficina ${oficinas.nomeoficina} foi deletado com sucesso !`,
                            showConfirmButton: false,
                            showCloseButton: true,
                        })
                    })
            }
        })

    }
    const submitForm = () => {
        const nForm = {
            ...form,
            dataoficina: formatDate(form.dataoficina)
        }

        dispatch(isUpdate ? updateOficina(nForm) : createOficina(nForm))
            .then(() => {

                setForm({});
                toggle();

                ReactSwal.fire({
                    icon: 'success',
                    title: `A oficina ${form.nomeoficina} foi cadastrada com sucesso !`,
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 4000,
                })

            })

    }

    useEffect(() => {
        const nDetalhe = {
            ...detalhe,
            dataoficina: moment(detalhe.dataoficina).format('YYYY-MM-DD')
        }
        setForm({ ...nDetalhe })

    }, [detalhe, setForm])

    return (
        <React.Fragment>
            <TitlePage>
                Oficinas
              <Button onClick={toggle} size="md" color="info">Cadastrar</Button>
            </TitlePage>


                {/* <FormInscritos /> */}

         
            <TableList oficinas={oficinas} mostraParticipante={mostraParticipante} editarOficina={editTable} excluirOficina={deleteTable} />

            <Modal isOpen={modalAluno.isOpen} toggle={toggleModalAluno} >
                <ModalHeader toggle={toggleModalAluno}>Aluno(s) inscrito(s)</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome do Aluno</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detalhe.inscricoes?.map((v, i) => (
                                <tr key={i}>
                                    <td>{v.usuarios.id}</td>
                                    <td>{v.usuarios.nomeparticipante}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ModalBody>

            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {isUpdate ? "Atualizar" : "Cadastrar"} Oficina
                </ModalHeader>
                <ModalBody>
                    <FormOficina state={stateForm} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitForm}>
                        {isUpdate ? "Atualizar" : "Cadastrar"}
                    </Button>
                </ModalFooter>
            </Modal>

        </React.Fragment>
    )
}


export default GerenciarOficinas;



const formatDate = (data) => {
    const [y, m, d] = data.split('-')
    return `${d}/${m}/${y}`
}
