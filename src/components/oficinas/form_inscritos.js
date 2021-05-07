
import React, { useEffect, useState } from 'react';

import { Table } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';


const FormInscritos = (props) => {

    const oficinas = useSelector(state => state.oficina.all)
    const perfil = useSelector(state => state.auth.usuario);
    const { codoficina, nomeoficina, inscrito, dataoficina, horaoficina } = props.item;

    const stateForm = useState({})

    // store

return (
    <>
        {inscrito ? (
            <div className="colunasFormularios">
                {/* <h1>Oficinas matriculadas</h1> */}
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome da oficina</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{codoficina}</td>
                            <td>{nomeoficina}</td>
                            <td>{moment(dataoficina).format('DD/MM/YYYY')}</td>
                            <td>{horaoficina}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            ) : ""}
        </>
    )
}
export default FormInscritos;