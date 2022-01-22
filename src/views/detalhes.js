import { useEffect } from 'react'
import { useParams } from 'react-router'
import Loading from '../components/loading'
import { Button } from 'reactstrap'
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails, deletarParticipanteOficina, inscreverParticipanteNaOficina } from '../store/oficina/oficina.action'
import TabelaOficinasInscritos from '../components/tabela'
import ReactSwal from '../plugins/swal'
import '../assets/css/style.css'

const Detalhes = (props) => {
  const { codoficina } = useParams()
  const dispatch = useDispatch()

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
            title: 'Removido da oficina com sucesso!',
            showConfirmButton: false,
            showCloseButton: true
          })
        })
        .catch(erro => console.log('Ocorreu um erro!'))
    } else {
      dispatch(inscreverParticipanteNaOficina(codoficina, inscricoes.id))
        .then(() => {
          ReactSwal.fire({
            icon: 'success',
            title: 'Cadastrado com sucesso na oficina!',
            showConfirmButton: false,
            showCloseButton: true
          })
        })
        .catch(erro => console.log('Ocorreu um erro!'))
    }
  }

  useEffect(() => {
    dispatch(getDetails(codoficina))
  }, [codoficina])

  const Detalhamento = ({ nomeoficina, dataoficina, horaoficina, valoroficina, nomemonitor, descricaoficina }) => (

    <div>
      <div className='colunasFormularios'>
        <div className='colunadetalhe1'>
          <h2 tag='h4' className='text-cadastro'>Dados da oficina</h2>
          <p className='info_oficina'><strong>Nome:</strong> {nomeoficina}</p>
          <p className='info_oficina'>
            <strong> Data: </strong> {new Date(dataoficina).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
          </p>
          {!isAdmin
            ? <Button onClick={() => toogleSubcription(inscricoes)} className={!registered ? 'estilo-botao-details estiloBotaoDetails' : 'estilo-botao-details-disable estiloBotaoDetails'} size='md'>
              {!registered ? (<><AiFillCheckSquare size='25' /> Inscreva-se </>) : (<><AiFillCloseSquare size='25' /> Remover Inscrição</>)}
            </Button>
            : ''}
        </div>
        <div className='colunadetalhe2'>
          <p className='info_oficina'>
            <strong>Horário: </strong> {horaoficina}
          </p>
          <p className='info_oficina'>
            <strong> Valor: R$ </strong> {String(valoroficina).replace('.', ',')}
          </p>
          <p className='info_oficina'>
            <strong> Monitor: </strong> {nomemonitor}
          </p>
          <p className='info_oficina'>
            <strong> Descrição: </strong> {descricaoficina}
          </p>
        </div>
      </div>
    </div>
  )

  const montarTela = (detalhe) => (
    <div>
      {Detalhamento(detalhe)}
      {isAdmin ? <TabelaOficinasInscritos inscricoes={detalhe.inscricoes} /> : ''}
    </div>
  )

  return (
    loading
      ? <Loading />
      : montarTela(detalhe)

  )
}

export default Detalhes
