
// import React, { useEffect, useState } from 'react';
// import { Table } from 'reactstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { getDetails } from '../store/oficina/oficina.action';


// const FormInscritos = (props) => {

//     const isAdmin = useSelector(state => state.auth.isAdmin)
//     const inscricoes = useSelector(state => state.oficina.details.inscricoes)
//     const dispatch = useDispatch()


//     useEffect(() => {
//         dispatch(getDetails(inscricao_id))
//     }, [dispatch, inscricao_id])




//     return (

//         <>
//             <Table>
//                 <div>Você está inscrito nestas oficinas:</div>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nome da oficina</th>
//                         <th>Data e hora</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {inscricoes?.map((v, i) => (
//                         <tr key={i}>
//                             <td>{i}</td>
//                             <td>{v.inscricoes.oficinas.codoficina}</td>
//                             <td>{v.inscricoes.oficinas.nomeoficina}</td>
//                             <td>{v.inscricoes.oficinas.dataoficina}</td>
//                             <td>{v.inscricoes.oficinas.horaoficina}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </>
//     )
// }
// export default FormInscritos;