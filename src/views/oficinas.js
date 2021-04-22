import { useEffect, useState } from 'react';
import { TitlePage } from "../assets/styled";
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getOficinasAll } from '../store/oficina/oficina.action';
import TableList from '../components/oficinas/tableList';
import FormOficina from '../components/oficinas/form';

const GerenciarOficinas = () => {
    document.title = "Casa da Dinda";
    const dispatch = useDispatch()
    const [isForm, setIsForm] = useState(false)
    const oficinas = useSelector(state => state.oficina.all)

    console.log(oficinas)
    useEffect(() => {
        dispatch(getOficinasAll());
    }, [dispatch])


    return (
        <>
            <TitlePage>
                Oficinas
              <Button onClick={() => setIsForm(!isForm)} size="sm" color="info">{isForm ? 'Listar' : 'Cadastrar'}</Button>
            </TitlePage>

            {isForm ? <FormOficina setIsForm={setIsForm} /> : <TableList oficinas={oficinas} />}

        </>
    )
}


export default GerenciarOficinas;
