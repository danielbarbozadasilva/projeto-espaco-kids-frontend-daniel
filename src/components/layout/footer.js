import React from 'react';
import LogoFooter from '../../assets/img/logo03footer.png';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { MdLocationOn, MdMailOutline, MdPhone } from 'react-icons/md';
import '../../assets/css/style.css';


const Footer = (props) => {

    return (
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 redes-sociais">
                        <h3 className="tituloRedesSociais">Redes sociais</h3>
                        <div className="icons-redes-sociais">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare className="iconeFooter" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare className="iconeFooter" /></a>
                            <a href="https://api.whatsapp.com/send?phone=+5521992690225" target="_blank" rel="noreferrer"><FaWhatsappSquare className="iconeFooter" /></a>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-4 col-sm-12 col-xs-12 " >
                        <img className="imagemFooter" src={LogoFooter} alt="imagem do footer" />
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 infomacoes">

                        <div className="address">
                            <h6><MdLocationOn className="iconeInfoRodape" />
                    Endereço: Rua Jorge Yunes, 125</h6>
                        </div>
                        <div className="email">
                            <h6><MdMailOutline className="iconeInfoRodape" />
                    Email: oficinas@espacokids.com</h6>
                        </div>

                        <div className="phone">
                            <h6><MdPhone className="iconeInfoRodape" />
                    Telefone: +55 21 24380548</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nomeFooter">
                        <h3 className="nome-footer">Copyright © 2021 - Todos os direitos reservados</h3>
                    </div>                
                </div>

            </div>

        </footer>
    )
}

export default Footer;

