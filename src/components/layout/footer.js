import React from 'react';
import WAIcon from '../../assets/icons/whatsapp.svg';
import FBIcon from '../../assets/icons/facebook.svg';
import IGIcon from '../../assets/icons/instagram.svg';
import TWIcon from '../../assets/icons/twitter.svg';
import YTIcon from '../../assets/icons/youtube.svg';



const Footer = (props) => {

    return (

        <footer className="footer">
            <div className="footer-top">
                <div className="address">
                    <h3><a href="/">{props.titulo}</a></h3>
                    <p>Rua Jorge Yunes, 125 - Recreio dos Bandeirantes - Rio de Janeiro - RJ</p>
                    <p>oficinas@espacokids.com</p>
                    <p>+55 21 24380548</p>
                </div>
                <div className="social-links">                 
                    <a href="https://web.whatsapp.com/" target='_blank' rel="noreferrer"><img src={WAIcon} alt="whatsapp"/></a>
                    <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><img src={FBIcon} alt=""/></a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><img src={IGIcon} alt=""/></a>
                    <a href="https://twitter.com/" target='_blank' rel="noreferrer"><img src={TWIcon} alt=""/></a>
                    <a href="https://www.youtube.com/" target='_blank' rel="noreferrer"><img src={YTIcon} alt=""/></a>
                </div>         

                {/* <div class="redes-sociais">
                    <h3 class="chamada-rodape">Redes sociais</h3>
                    <div class="icons-redes-sociais">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram-square"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a>
                    </div>
                </div>  */}


            </div>

            <div className="footer-bottom">
                <p className="text-center">&copy; 2021 - All rights reserved <span> || </span> Powered by <a href="/"><strong>Espaço Kids - {props.titulo}</strong></a></p>
            </div>
        </footer>
    )
}

export default Footer;

/* 
${({theme}) => css`
    background-color: ${theme.primary}!important;
    boder-bottom: 5px solid ${theme.secondary};
`

*/

