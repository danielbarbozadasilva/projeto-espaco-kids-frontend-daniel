
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetalhes } from '../services/oficinas.service';
import Loading from '../components/loading';
import { Jumbotron, 
         Navbar,
         Button } from 'reactstrap';
import styled from 'styled-components';
import { AiFillCloseSquare, AiFillCheckSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../store/oficina/oficina.action";
import Tabela from '../components/tabela'


const Detalhes = (props) => {
    const { codoficina } = useParams();
    const dispatch = useDispatch();

    const isAdmin = useSelector(state => state.auth.isAdmin)
    const detalhe = useSelector(state => state.oficina.details)
    const registered = useSelector(state => state.oficina.details.registered)
    
    const loading = useSelector(state => state.oficina.loading)


    useEffect(() => {
        dispatch(getDetails(codoficina))
    }, [dispatch, codoficina])



    const Detalhamento = ({ nomeoficina, dataoficina, horaoficina, valoroficina, nomemonitor, descricaoficina  }) => (
        <SJumbotron style={{ backgroundColor: registered ? '#D4EDDA' : '#F8D7DA' }}>
            <div className="container">
                <p className="nomeoficina">{nomeoficina}</p>
                <p className="info_oficina">
                <strong> Data: </strong> { new Date(dataoficina).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) }
                </p>
                <p className="info_oficina">
                <strong>Horário: </strong> {horaoficina}
                </p>
                <p className="info_oficina">
                <strong> Valor: R$ </strong> {String(valoroficina).replace('.',',')}
                </p>
                <p className="info_oficina">
                <strong> Monitor: </strong> {nomemonitor}
                </p>
                <p className="info_oficina">
                <strong> Descrição: </strong> {descricaoficina}
                </p>
            </div>
        </SJumbotron>
    )


    const Menu = () => (
        <Navbar expand="md mb-4">
            <Button onClick={() => { }} color={!registered ? "primary" : "secondary"} size="sm">
                {!registered ? (<><AiFillCheckSquare /> Inscreva-se </>) : (<><AiFillCloseSquare /> Remover Inscrição</>)}
            </Button>
        </Navbar>
    )

    const montarTela = (detalhe) => (
        <div>
            {Detalhamento(detalhe)}
            {!isAdmin ? Menu() : <Tabela inscritos={detalhe.inscricoes} />}

        </div>
    )

    return (
        loading
            ? <Loading />
            : montarTela(detalhe)

    )
}


export default Detalhes;



const SJumbotron = styled(Jumbotron)`
    background-color: #FFFDE7;
    margin-top: 10px;
    font-family: 'Pangolin', cursive;

    .nomeoficina {
        font-size: 35px;   
    }

    .info_oficina {
        font-size: 20px;
    }
`