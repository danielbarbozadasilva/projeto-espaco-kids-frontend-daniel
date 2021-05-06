import React from 'react';
import LogoFooter from '../../assets/img/logo2.png';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa';

const Footer = (props) => {

    return (
        <footer>
            <div className="redes-sociais">
                <h3 className="tituloRedesSociais">Redes sociais</h3>
                <div className="icons-redes-sociais">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare className="iconeFooter"/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare className="iconeFooter"/></a>
                    <a href="https://api.whatsapp.com/send?phone=+5521992690225" target="_blank" rel="noreferrer"><FaWhatsappSquare className="iconeFooter"/></a>
                </div>
            </div>
      
        <div className="nome">
        <img className="imagemFooter" src={LogoFooter} alt="imagem do footer" />

            <h3 className="nome-footer">Copyright © 2021 - Todos os direitos reservados</h3>
        </div>
        <div className="infomacoes">
            <div className="address">
                <h6> <i className="fas fa-map-marker-alt"></i>
                    Endereço: Rua Jorge Yunes, 125</h6>
            </div>

            <div className="email">
                <h6><i className="far fa-envelope"> </i>
                    Email: oficinas@espacokids.com</h6>
            </div>

            <div className="phone">
                <h6><i className="fab fa-whatsapp"></i>
                    Telefone: +55 21 24380548</h6>
            </div>
        </div>

    </footer>
    )
}

export default Footer;

