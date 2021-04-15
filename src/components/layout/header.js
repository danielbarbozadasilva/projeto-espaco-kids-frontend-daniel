import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink as RRDNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,    // estilo
    Container,
    Tooltip,
    Nav, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import Logo from "../../assets/img/espacokids4.png";
import '../../assets/css/style.css';
import { AiFillRead } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../store/auth/auth.action';
import { isAuthenticated } from '../../config/auth';
import styled from 'styled-components';

const Header = (props) => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const toggle = () => setIsOpen(!isOpen);
    const usuario = useSelector(state => state.auth.usuario)

    const logout = () => {
        dispatch(logoutAction())
    }

    const location = useLocation();
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
        )
    }

    return (
        <header>
            <SNavbar color="dark" dark expand="md">
                <Container>
                    <SNavbarBrand tag={RRDNavLink} to="/" id="titleNav"> Espaço Kids - {props.titulo}
                    </SNavbarBrand>
                    <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="titleNav" toggle={toggleTooltip}>
                        Voltar ao Menu Principal
                    </Tooltip>
                    <NavbarToggler onClick={toggle} />
                    {isAuthenticated() ? (
                        <React.Fragment>
                            <SCollapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/" >Oficinas</SNavLink>
                                    </NavItem>
                                    <NavItem >
                                        <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/sobre" >Outros</SNavLink>
                                    </NavItem>
                                </Nav>
                            </SCollapse>

                            <Nav >
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {usuario.nome}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Perfil</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={logout}>Sair</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </React.Fragment>
                    ) : ""}
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

    ) // Fecha o return
}



export default Header;

const SNavbar = styled(Navbar)`
    display: flex;    
    font-family: 'Pangolin', cursive!important;
    font-size: 18px;
    background-color: #b8b5ff!important;;
    min-height: 30px;
    margin-bottom: 5px;

    a {
        color: black!important;
    }

`

const SNavLink = styled(NavLink)`
    margin-left: 30px;
    border-radius: 5px;


    &.active {
        color: black!important;
        background-color: #4B8EC7 !important;
    }

    @media (max-width: 767.98px) {
        margin: 6px 0;
        
    }

`
const SCollapse = styled(Collapse)`
    /* flex-grow: 0; */
`

const IconLogo = styled(AiFillRead)`
    font-size: 26px;
    margin-top: -4px
`


const SNavbarBrand = styled(NavbarBrand)`
font-size: 24px;

    
`

const SContainer = styled(Container)`
    background-color: #e4fbff;
    min-height: 140px;
    padding: 10px;
    margin: 5px 0;
    font-family: 'Pangolin', cursive;
    text-align: center;


    p {
        font-size: 25px;
    }
`






