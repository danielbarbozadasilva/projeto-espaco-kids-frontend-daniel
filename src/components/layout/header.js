import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink as RRDNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Container,
    Tooltip,
    Nav, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../store/auth/auth.action';
import { isAuthenticated } from '../../config/auth';
import history from '../../config/history';

import LogoHeader from '../../assets/img/logo.png';
import '../../assets/css/style.css';

const Header = (props) => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const toggle = () => setIsOpen(!isOpen);
    const usuario = useSelector(state => state.auth.usuario)
    const isAdmin = useSelector(state => state.auth.isAdmin)

    const logout = () => {
        dispatch(logoutAction())
    }

    const location = useLocation();

    // pathname - Retorna o endereço da URL atual
    if (location.pathname === '/signin') {
        return (
            <header>
                <SNavbar light expand="md" >
                    <Container>

                        {isAdmin ? (
                            <NavbarToggler onClick={toggle} />
                        ) : ""}

                        <Collapse isOpen={isOpen} navbar>
                            <SNavbarBrand tag={RRDNavLink} to="/" id="titleNav">
                                <img className="logo-img" src={LogoHeader} />
                            </SNavbarBrand>
                        </Collapse>

                        <Tooltip placement="bottom" isOpen={tooltipOpen} autohide={false} target="titleNav" toggle={toggleTooltip}>
                            Retornar para a página inicial.
                        </Tooltip>
                    </Container>
                </SNavbar>
            </header>
        )
    }

    return (
        <header>
            <SNavbar className="barraHeader" color="dark" dark expand="md">
                <Container>

                    <NavbarBrand tag={RRDNavLink} to="/" id="logoMain">
                        <img className="logo-img" src={LogoHeader} />
                    </NavbarBrand>
                    <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="logoMain" toggle={toggleTooltip}>
                        Voltar ao Menu Principal
                    </Tooltip>
                    {isAuthenticated() ? (
                        <React.Fragment>
                            <SCollapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/">Inicio</SNavLink>
                                    </NavItem>
                                    {isAdmin ? (
                                        <NavItem>
                                            <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/oficinas" >Oficinas</SNavLink>
                                        </NavItem>
                                    ) : ""}
                                    <NavItem >
                                        <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/sobre" >Outros</SNavLink>
                                    </NavItem>
                                </Nav>
                            </SCollapse>

                            <Nav >
                                <UncontrolledDropdown nav inNavbar>
                                    <SDropdownToggle nav caret>
                                        {usuario.nomeusuario}
                                    </SDropdownToggle>
                                    <DropdownMenu>
                                        {isAdmin ? (
                                            <DropdownItem onClick={() => history.push('/usuarios')}>Usuários</DropdownItem>
                                        ) : ""}
                                        <DropdownItem onClick={() => history.push('/perfil')}>Perfil</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={logout}>Sair</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </React.Fragment>
                    ) : ""}
                    {isAdmin ? (
                        <NavbarToggler onClick={toggle} />
                    ) : ""}
                </Container>
            </SNavbar>
        </header>
    ) // Fecha o return
}



export default Header;

const SNavbar = styled(Navbar)`
    background-image: linear-gradient(to left, #ff425b, #c42252);
    box-shadow: 0 4px 12px 0 rgb(226 60 82 / 20%);
    min-height: 50px;
    padding-bottom: 0.5rem;
    font-size: 18px;
    font-weight: 600;
    border-style: none;


`

const SNavLink = styled(NavLink)`
    margin-left: 70px;
    border-radius: 5px;        



    &.active {
        color: white!important;
        margin-left: 80px!important;
    }

    @media (max-width: 767.98px) {
        margin: 6px 0;

    }

`
const SCollapse = styled(Collapse)`
    /* flex-grow: 0; */
`


const SNavbarBrand = styled(NavbarBrand)`
    font-size: 24px;
    color:white!important;

`
const SDropdownToggle = styled(DropdownToggle)`
    color:white!important;

`