import React, { useState, useEffect, useCallback } from 'react';
import { getServiceAllOficinas } from '../services/oficinas.service';
import Loading from '../components/loading';
import CardItem from '../components/oficinas/card_item';
import {Col, Row } from 'reactstrap';
import styled from 'styled-components';


const Oficinas = () => {

    const [oficinas, setOficinas] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [hasError, setError] = useState(false);

    const getOficinas = useCallback(() => {
        setLoading(true)
        getServiceAllOficinas()
            .then(res => {
                setOficinas(res.data)
                setLoading(false)
            })
            .catch(err => {
                // setError(true)
                console.log('Não foi possível acessar a Oficina selecionada. Tente novamente.', err)
                setLoading(false)
            })

    }, [])


    useEffect(() => {
        getOficinas();
    }, [getOficinas])


    const MapearOficinas = (oficinas) => oficinas.map((item, i) => (
        <Col md="3" xl="3" sm="12" xs="12" key={i} className="mb-4">
            <CardItem item={{ ...item, status: true }} />
        </Col>

    ))

    return (
        <div>
            <h1>Oficinas do Mês de Abril</h1>
        <BoxCursos>
            {loading ? <Loading /> : MapearOficinas(oficinas)}
        </BoxCursos>
        </div>
    )
}

export default Oficinas;

const BoxCursos = styled(Row)`
`



