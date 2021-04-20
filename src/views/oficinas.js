import { useEffect } from 'react';
import { TitlePage } from "../assets/styled";
import { Button, Table } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { getOficinasAll } from '../store/oficina/oficina.action';

const Oficinas = () => {
    document.title = 'Casa da Dinda';
    const dispatch = useDispatch()
    const oficina = useSelector(state => state.oficina.all)



    useEffect(() => {
        dispatch(getOficinasAll());
    }, [dispatch])

    return (
        <>
            <TitlePage>
            Oficinas
              <Button size="sm" color="info">Cadastrar</Button>
            </TitlePage>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME DA OFICINA</th>
                    </tr>
                </thead>
                <tbody>
                    {oficina?.map((oficinas, i) => (
                        <tr key={i}>
                            <th scope="row">{oficinas.codoficina}</th>
                            <td>{oficinas.nomeoficina}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}


export default Oficinas;



// import { useEffect, useState } from 'react';
// import { TitlePage } from "../assets/styled";
// import { Button } from 'reactstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { getOficinasAll } from '../store/oficina/oficina.action';
// import TableList from '../components/oficinas/tableList';
// import FormOficinas from '../components/oficinas/form';

// const GerenciarOficinas = () => {
//     document.title = 'Casa da Dinda';
//     const dispatch = useDispatch()
//     const [isForm, setIsForm] = useState(false)
//     const oficinas = useSelector(state => state.oficina.all)

//     useEffect(() => {
//         dispatch(getOficinasAll());
//     }, [dispatch])


//     return (
//         <>
//             <TitlePage>
//                 Oficinas
//               <Button onClick={() => setIsForm(!isForm)} size="sm" color="info">{isForm ? 'Listar' : 'Cadastrar'}</Button>
//             </TitlePage>

//             {isForm ? <FormOficinas setIsForm={setIsForm} /> : <TableList oficinas={oficinas} />}

//         </>
//     )
// }


// export default GerenciarOficinas;
