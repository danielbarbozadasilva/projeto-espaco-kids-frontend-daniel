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
import { AiFillRead } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../store/auth/auth.action';
import { isAuthenticated } from '../../config/auth';
import history from '../../config/history';

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
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <SNavbarBrand tag={RRDNavLink} to="/" id="titleNav">
                                <img class="logo-img" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/530/5071630530_410c4119-7b64-40a1-aa87-a2c3638b6c55.png?cb=1618556501" alt="" />
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
            <SNavbar expand="md">
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
                </Container>
            </SNavbar>
            <Container className="kids" fluid={true}>
                {/* <img className="logo" src={Logo} alt="logo" /> */}
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
    background-image: linear-gradient(to left, #ff425b, #c42252);
    box-shadow: 0 4px 12px 0 rgb(226 60 82 / 20%);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    border-style: none;

`

const SNavLink = styled(NavLink)`
    margin-left: 30px;
    border-radius: 5px;


    &.active {
        color: white!important;
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
    color:white!important;

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






