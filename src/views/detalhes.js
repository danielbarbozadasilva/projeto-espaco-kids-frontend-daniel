
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetalhes } from '../services/oficinas.service';
import Loading from '../components/loading';
import TabelaInscritos from '../components/tabela-inscritos/index';
import Inscricao from '../components/inscricaoform/index';
import { Jumbotron, 
         Navbar, 
         Nav, 
         Button } from 'reactstrap';
import styled from 'styled-components';
import { AiFillCloseSquare, AiFillCheckSquare } from "react-icons/ai";


const Detalhes = (props) => {
    const { codoficina } = useParams();
    const { history } = props // pegando o histórico do componente


    const [loading, setLoading] = useState(false);
    const [detalhes, setDetalhes] = useState({});
    const [update, setUpdate] = useState(false)
    const [isSub, setSub] = useState(false)


    const getDetalhes = useCallback(async () => {

        try {
            setLoading(true)
            const res = await getServiceDetalhes(codoficina);
            setDetalhes(res.data);
            setLoading(false);

        } catch (error) {
            console.log('-----', error)
            history.push('/?error=404')
        }
        
    }, [codoficina, history]);

    
    // use Effect é o ciclo de vida que executa antes* de renderizar a página.
    useEffect(() => {
        console.log('start')
        getDetalhes()
        setUpdate(false)

    }, [getDetalhes, update])


    const Detalhamento = ({ nomeoficina, dataoficina, horaoficina, valoroficina, nomemonitor, descricaoficina  }) => (
        <SJumbotron style={{ backgroundColor: isSub ? '#D4EDDA' : '#F8D7DA' }}>
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

            <Button onClick={() => setSub(!isSub)} color={!isSub ? "primary" : "secondary"} size="sm">

                {!isSub ? (<><AiFillCheckSquare /> Inscreva-se </>) : (<><AiFillCloseSquare /> Remover Inscrição</>)}
            </Button>
        </Navbar>
    )

    const montarTela = (detalhe) => (
        <div>
            {Detalhamento(detalhe)}
            {Menu()}

        </div>
    )

    return (
        loading 
            ? <Loading /> 
            : montarTela(detalhes)
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
const SNavbar = styled(Navbar)`
    background-color: none !important;
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px dotted #7868e6;
    display: flex;
    
    .info {
        flex: 1;
        font-family: 'Pangolin', cursive;
        font-size: 25px;
    }
`


// tela de detalhes

// Menu de toogle de troca de tela (Botão)
// tela de inscrição / tabela






