import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Layout = (props) => {

    document.title = props.nomeDaPagina;
    return (
        <>
            <Header className="container-fluid" titulo={props.nomeDaPagina} />
            <Main className="container-fluid">
                {props.children}
            </Main>
            <Footer titulo={props.nomeDaPagina} />
        </>
    )
}

export default Layout;

const Main = styled.main`
    width: 85%;
    flex: 1;
`
