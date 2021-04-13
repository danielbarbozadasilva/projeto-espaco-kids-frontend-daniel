
import React, { useState } from 'react';
import { NavLink as RRDNavLink, useLocation } from 'react-router-dom'; // funcionalidade
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Container,
    NavbarBrand,
    Tooltip,
} from 'reactstrap';
import styled from 'styled-components';
import Logo from "../../assets/img/espacokids4.png";
import '../../assets/css/style.css';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const toggle = () => setIsOpen(!isOpen);

    const location = useLocation();
    console.log("----------------"+location.pathname);
     if (location.pathname === '/signin') {
        return (
            <header>
                
             <SNavbar light expand="md">
                    <Container>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <SNavbarBrand tag={RRDNavLink} to="/" id="titleNav"> Espaço Kids - {props.titulo}
                            </SNavbarBrand>
                        </Collapse>

                        <Tooltip placement="bottom" isOpen={tooltipOpen} autohide={true} target="titleNav" toggle={toggleTooltip}>
                            Retornar para a página inicial.
                        </Tooltip>

                    </Container>
                </SNavbar>

                <Container className="kids" fluid={true}>
                    <img className="logo" src={Logo} alt="logo" />
                </Container>
            </header>
        ) // Fecha o return
    } else {
        return (
            <header>
                <SNavbar light expand="md">
                    <Container>

                        <NavbarToggler onClick={toggle} />

                        <Collapse isOpen={isOpen} navbar>
                            <SNavbarBrand tag={RRDNavLink} to="/" id="titleNav"> Espaço Kids - {props.titulo}
                            </SNavbarBrand>
                        </Collapse>

                        <Tooltip placement="bottom" isOpen={tooltipOpen} autohide={true} target="titleNav" toggle={toggleTooltip}>
                            Retornar para a página inicial.
                        </Tooltip>
                    </Container>
                </SNavbar>

                <Container className="kids" fluid={true}>
                    <img className="logo" src={Logo} alt="logo" />
                </Container>

                <SContainer fluid={true}>
                    <h2>{props.titulo}</h2>

                    <p>Um espaço gostoso para a criança brincar e aprender através da linguagem das artes, <br />estimulando a imaginação, a coordenação motora, a socialização <br />e, é claro, a diversão dos pequenos.</p>
                </SContainer> 
            </header>
        )
    }
 }

export default Header;

const SNavbar = styled(Navbar)`
    display: flex;
    background-color: #b8b5ff;
    min-height: 30px;
    margin-bottom: 5px;
`

const SNavbarBrand = styled(NavbarBrand)`
    font-family: 'Pangolin', cursive;
    font-size: 25px;
`

const SContainer = styled(Container)`
    background-color: #e4fbff;
    min-height: 140px;
    padding: 10px;
    margin: 5px 0;
    font-family: 'Pangolin', cursive;
    text-align: center;

    h2 {
        font-size: 50px;

    }

    p {
        font-size: 25px;
    }
`






