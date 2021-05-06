
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from '../components/loading';
import { Jumbotron, 
         Navbar,
         Button } from 'reactstrap';
import styled from 'styled-components';
import { AiFillCloseSquare, AiFillCheckSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, deletarParticipanteOficina, inscreverParticipanteNaOficina } from "../store/oficina/oficina.action";
import TabelaOficinasInscritos from '../components/tabela'
import ReactSwal from "../plugins/swal";



const Detalhes = (props) => {
    const { codoficina } = useParams();
    const dispatch = useDispatch();


    const isAdmin = useSelector(state => state.auth.isAdmin)
    const detalhe = useSelector(state => state.oficina.details)
    const registered = useSelector(state => state.oficina.details.registered)
    
    const loading = useSelector(state => state.oficina.loading)
    const inscricoes = useSelector(state => state.oficina.details.inscricoes)


    const toogleSubcription = (inscricoes) => {

        if (registered) {
            dispatch(deletarParticipanteOficina(codoficina, inscricoes[0].id))
                .then(() => {
                    ReactSwal.fire({
                        icon: 'success',
                        title: `Aluno removido da oficina`,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                })
                .catch(erro => console.log('Ocorreu um erro!'))
        } else {
            dispatch(inscreverParticipanteNaOficina(codoficina, inscricoes.id))
                .then(() => {
                    ReactSwal.fire({
                        icon: 'success',
                        title: `Aluno Cadastrado com sucesso !`,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                })
                .catch(erro => console.log('Ocorreu um erro!'))
        }


    }

    useEffect(() => {
        dispatch(getDetails(codoficina))
    }, [codoficina])


    const Detalhamento = ({ nomeoficina, dataoficina, horaoficina, valoroficina, nomemonitor, descricaoficina  }) => (
        <Jumbotron style={{ backgroundColor: registered && !isAdmin ? '#D4EDDA' : '#eee' }}>
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
        </Jumbotron>
    )


    const Menu = () => (
        <Navbar expand="md mb-4">
            <Button onClick={() => toogleSubcription(inscricoes)} color={!registered ? "primary" : "secondary"} size="sm">
                {!registered ? (<><AiFillCheckSquare /> Inscreva-se </>) : (<><AiFillCloseSquare /> Remover Inscrição</>)}
            </Button>
        </Navbar>
    )

    const montarTela = (detalhe) => (
        <div>
            {Detalhamento(detalhe)}
            {!isAdmin ? Menu() : <TabelaOficinasInscritos inscricoes={detalhe.inscricoes} />}
        </div>
    )

    return (
        loading
            ? <Loading />
            : montarTela(detalhe)

    )
}


export default Detalhes;



const SNavbar = styled.div`
    background-color:none !important;
    margin: 10px 0 20px;
    padding: 10px 0;
    border-bottom: thin dotted #4446;
    display:flex;
    
    .info {
        flex:1;
    }
`

