import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
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
console.log(location.pathname);
    if (!location.pathname === '/signin') {
        return (
            <header>
                <SNavbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand tag={RRDNavLink} to="/" id="logoMain"> <IconLogo /> GC </NavbarBrand>
                        <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="logoMain" toggle={toggleTooltip}>
                            Voltar ao Menu Principal
                    </Tooltip>
                        <NavbarToggler onClick={toggle} />
                        {isAuthenticated() ? (
                            <React.Fragment>
                                <SCollapse isOpen={isOpen} navbar>
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/" >Cursos</SNavLink>
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
            </header>
        )

    }
}

export default Header;

const SNavbar = styled(Navbar)`
    background-color: #053566 !important;
    border-bottom: 5px solid #4b8EC7;

    a {
        color: #fff !important;
    }

`

const SNavLink = styled(NavLink)`
    margin: auto 5px;
    border-radius: 5px;

    &.active {
        color: #fff !important;
        background-color: #4B8EC7 !important;
    }

    @media (max-width: 767.98px) {
        margin:6px 0;
        
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
    font-family: 'Pangolin', cursive;
    font-size: 25px;
`