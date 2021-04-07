import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';



const Layout = (props) => {
    // setar o titulo da pagina
    document.title = props.nomeDaPagina;
    return (
        <React.Fragment>
            <Header titulo={props.nomeDaPagina} />
            <Main className="container-fluid">

                {/* OS FILHOS SÃO TUDO QUE ESTÃO NO <Layout></Layout> no routers e ambém pode estar em outros, por exemplo eu posso criar um arquivo abrir <Layout></Layout> e fechar ele vai herdar de TODOS OS ARQUIVOS(FILHOS)*/}
                {props.children}
    
            </Main>
            <Footer titulo={props.nomeDaPagina}/>
        </React.Fragment>
    )
}

export default Layout;

const Main = styled.main`
    flex: 1;
`
