import { useEffect, useState } from 'react';
import { TitlePage } from "../assets/styled";
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUsuariosAll } from '../store/participante/participante.action';
import TableList from '../components/usuarios/tableList';
import FormUsuario from '../components/usuarios/form';

const GerenciarUsuarios = () => {
    document.title = "Casa da Dinda";
    const dispatch = useDispatch()
    const [isForm, setIsForm] = useState(false)
    const usuarios = useSelector(state => state.usuario.all)

    useEffect(() => {
        dispatch(getUsuariosAll());
    }, [dispatch])


    return (
        <>
            <TitlePage>
                Participantes
              <Button onClick={() => setIsForm(!isForm)} size="sm" color="info">{isForm ? 'Listar' : 'Cadastrar'}</Button>
            </TitlePage>

            {isForm ? <FormUsuario setIsForm={setIsForm} /> : <TableList usuarios={usuarios} />}

        </>
    )
}


export default GerenciarUsuarios;
