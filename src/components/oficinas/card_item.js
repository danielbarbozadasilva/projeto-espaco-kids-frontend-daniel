import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
  Button
} from 'reactstrap';
import styled from 'styled-components';
import '../../assets/css/style.css'

const CardItem = (props) => {

    const { codoficina, nomeoficina, urlimagemoficina, dataoficina, valoroficina} = props.item;


  return (
    <div>
       
      <SCard> 
        <CardImg className="cardimg" src={urlimagemoficina} alt="oficinas"/>

        <CardBody>
           
            <CardTitle className="title">{nomeoficina}</CardTitle>
            <CardTitle><strong>Data: </strong> { new Date(dataoficina).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) }</CardTitle>
            <CardTitle><strong>Valor: R$ </strong> {String(valoroficina).replace('.',',')} </CardTitle>
          
            <Button className="estilo-botao" text="center" size="lg"
                tag={Link} to={`/detalhes/${codoficina}`}>Informações
            </Button>
        </CardBody>

    </SCard>
    </div>
  );
};

export default CardItem;

const SCard =  styled(Card)`
  
    width: 20rem;
    
    background-color: #FFF;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    
    .cardimg {
      height: 220px;
      object-fit: cover;
    }

    .title {
      font-size: 26px;
    }

    :hover {
        box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253)!important;
        transition:1s;
        opacity: 0.5;
    }
`
