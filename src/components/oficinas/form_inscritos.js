
import React, { useState } from 'react';

import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';


const FormInscritos = (props) => {

    const oficinas = useSelector(state => state.oficina.all)
    const perfil = useSelector(state => state.auth.usuario);
    const { codoficina, nomeoficina, inscrito, dataoficina, horaoficina } = props.item;

    const stateForm = useState({})

    // store

    return (
        <>
            {oficinas ? (
                <div className="colunasFormularios" id="divTabela">
                    {/* <h1>Oficinas matriculadas</h1> */}
                    <Table>
                        <thead >
                            <tr>
                                <th>ID</th>
                                <th>Nome da oficina</th>
                                <th>Data</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {oficinas.map((item, i) => (
                                item.inscrito ? (
                                        <tr>
                                            <td>{item.codoficina}</td>
                                            <td>{item.nomeoficina}</td>
                                            <td>{new Date(item.dataoficina).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                                            <td>{item.horaoficina}</td>
                                        </tr>
                                    ): ""
                            ))}
                        </tbody>
                    </Table>
                </div>
            ) : ""}
        </>
    )
}

export default FormInscritos;