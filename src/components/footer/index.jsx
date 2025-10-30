import React from 'react';
import './index.css';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-info">
                    <p>Atendimento: Segunda a Sexta, das 8h às 17h (horário de Brasília)</p>
                    <p>E-mail: contato@losantos.com</p>
                    <p>Telefone: +55 (84) 9999-9999</p>
                    <p>WhatsApp: (84) 9999-9999</p>
                    <p className="address">Rua Ibernon Martins, 55</p>
                </div>
                <div className="payment-methods">
                    <img src="/footer/imagevisa.png" alt="Visa" className="payment-icon" />
                    <img src="/footer/imagemaster.png" alt="MasterCard" className="payment-icon" />
                    <img src="/footer/imageelo.png" alt="Elo" className="payment-icon" />
                    <img src="/footer/imageamerican.png" alt="American Express" className="payment-icon" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Valente Design Studio. | Projeto acadêmico.</p>
            </div>
        </footer>
    );
};

export default Footer;