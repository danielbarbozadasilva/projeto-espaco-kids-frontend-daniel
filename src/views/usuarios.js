import { useEffect } from 'react';
import { TitlePage } from "../assets/styled";
import { Button, Table } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { getUsuariosAll } from '../store/usuario/usuario.action';

const Usuarios = () => {
    document.title = 'Casa da Dinda';
    const dispatch = useDispatch()
    const usuario = useSelector(state => state.usuario.all)



    useEffect(() => {
        dispatch(getUsuariosAll());
    }, [dispatch])

    return (
        <>
            <TitlePage>
                Usuários
              <Button size="sm" color="info">Cadastrar</Button>
            </TitlePage>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME DO USUÁRIO</th>
                    </tr>
                </thead>
                <tbody>
                    {usuario?.map((usuarios, i) => (
                        <tr key={i}>
                            <th scope="row">{usuarios.id}</th>
                            <td>{usuarios.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}


export default Usuarios;
