import React from 'react';
import '../../assets/fontawesome/css/all.min.css';
import '../../assets/css/style.css';



const Footer = (props) => {

    return (
        <footer className="footer">
            <div className="redes-sociais">
                <h3 className="tituloRedesSociais">Redes sociais</h3>
                <div className="icons-redes-sociais">
                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+5521992690225" target="_blank"><i className="fab fa-whatsapp-square"></i></a>
                </div>
            </div>
      
        <div class="nome">
            <img class="imagemFooter" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/251/5089393251_401ffe77-813b-41f1-9661-a55726bce4db.png?cb=1618818706" alt="" />
            <h3 class="nome-footer">Copyright © 2021 - Todos os direitos reservados</h3>
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

            <div class="phone">
                <h6><i className="fab fa-whatsapp"></i>
                    Telefone: +55 21 24380548</h6>
            </div>
        </div>

    </footer>
    )
}

export default Footer;

