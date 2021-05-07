import React, { useEffect } from 'react';
import CardItem from "../components/oficinas/card_item";
import Loading from '../components/loading';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOficinasAll } from '../store/oficina/oficina.action';
import FormInscritos from '../components/oficinas/form_inscritos';

const Oficinas = () => {
   
    document.title = "Casa da Dinda - Início";

    const dispatch = useDispatch();
    const isAdmin = useSelector(state => state.auth.isAdmin)

    // estou pegando o estado oficina no index
    const oficina = useSelector(state => state.oficina.all);
    const loading = useSelector(state => state.auth.loading);

    useEffect(() => {
        dispatch(getOficinasAll());
    }, [dispatch])

    const MapearOficinas = (oficinas) => oficinas.map((item, i) => (
        <Col md="4" xl="4" sm="8" xs="8" key={i} className="mb-4">
            <CardItem item={{ ...item, status: true }} />
        </Col>
    ))

    const MapearInscritos = (oficinas) => oficinas.map((item, i) => (
        <Col md="12" xl="12" sm="8" xs="8" key={i} className="mb-12">
            <FormInscritos item={{ ...item}} />
        </Col>
    ))

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <BoxOficinas>
                {!loading && oficina.length === 0 ? "Não tem Oficinas disponiveis" : MapearOficinas(oficina)}
                {!isAdmin? MapearInscritos(oficina) : ""}
            </BoxOficinas>
            
        </>
    )
    
}

export default Oficinas;


const BoxOficinas = styled(Row)`

`