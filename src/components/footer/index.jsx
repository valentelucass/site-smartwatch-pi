import React from 'react';
import './index.css';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-info">
                    <p>Atendimento: Segunda a Sexta, das 8h às 17h (horário de Brasília)</p>
                    <p>E-mail: contato@losantos.com</p>
                    <p>WhatsApp: (XX) 9XXXX-XXXX</p>
                    <p className="address">Rua Ibernon Martins, 55</p>
                </div>
                <div className="payment-methods">
                    {/* Adicione os SVGs ou imagens dos cartões aqui */}
                    <span>VISA</span>
                    <span>MasterCard</span>
                    <span>JCB</span>
                    <span>etc</span>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Victoria Hedge | Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;