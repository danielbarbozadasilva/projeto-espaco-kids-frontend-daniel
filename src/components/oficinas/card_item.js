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
          
            <Button text="center" color="link" size="lg"
                tag={Link} to={`/detalhes/${codoficina}`}>Informações
            </Button>
        </CardBody>

    </SCard>
    </div>
  );
};

export default CardItem;

const SCard =  styled(Card)`

    background-color: #FFFDE7;
    border: none;
    font-family: 'Pangolin', cursive;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;

    .cardimg {
      height: 260px;
      object-fit: cover;
    }

    .title {
      font-size: 26px;
    }

    :hover {
        background-color: #FFEB3B;
        transition:1s;
        opacity: 0.7;
    }
`
