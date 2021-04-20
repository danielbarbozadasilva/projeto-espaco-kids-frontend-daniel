import React, { useEffect } from 'react';
import CardItem from "../components/oficinas/card_item";
import Loading from '../components/loading';
import styled from 'styled-components';
import { Breadcrumb, Col, Row, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOficinasAll } from '../store/oficina/oficina.action';

const Oficinas = () => {
    document.title = "Casa da Dinda - Início";

    const dispatch = useDispatch();

    // estou pegando o estado oficina no index
    const oficina = useSelector(state => state.oficina.all);
    const loading = useSelector(state => state.auth.loading);

    useEffect(() => {
        dispatch(getOficinasAll());
    }, [dispatch])


    const MapearOficinas = (oficinas) => oficinas.map((item, i) => (
        <Col md="3" xl="3" sm="12" xs="12" key={i} className="mb-4">
            <CardItem item={{ ...item, status: true }} />
        </Col>
    ))

    if (loading) {
        return <Loading />
    }

    // const onlyAdmim = () => isAdmin ? (
    //     <Breadcrumb>
    //         <div>Seja bem vindo Administrador!</div>
    //         <Button size="sm" className="ml-auto">Gerenciar</Button>
    //     </Breadcrumb>
    // ) : ""


    return (
        <>
            <BoxOficinas>
                {!loading && oficina.length === 0 ? "Não tem Oficinas disponiveis" : MapearOficinas(oficina)}
                {/* {Oficinas.length == 0 ? "Não tem Oficinas disponiveis" : loading ? <Loading /> : MapearOficinas(Oficinas)} */}
            </BoxOficinas>
        </>
    )
}

export default Oficinas;


const BoxOficinas = styled(Row)`

`