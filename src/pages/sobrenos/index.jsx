import React from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const SobreNosPage = () => {
    return (
        <div className="sobre-nos-page">
            <Header />
            <main className="sobre-nos-container">
                <section className="intro-section">
                    <h1>Sobre Nós</h1>
                    <p>Para mais informações sobre nossos produtos e serviços, entre em contato por e-mail. Nossa equipe está sempre pronta para ajudar.</p>
                </section>

                <section className="details-section">
                    <div className="contact-info">
                        <div className="info-block">
                            <MapPinIcon />
                            <div className="info-text">
                                <h2>Endereço</h2>
                                <p>Rua Ibernon martins, 55</p>
                            </div>
                        </div>
                        <div className="info-block">
                            <PhoneIcon />
                            <div className="info-text">
                                <h2>Telefone</h2>
                                <p>Celular: (+84) 9546-6789</p>
                                <p>Central de Atendimento: (+84) 456-6789</p>
                            </div>
                        </div>
                        <div className="info-block">
                            <ClockIcon />
                            <div className="info-text">
                                <h2>Horários</h2>
                                <p>Segunda a sexta: 9h00 às 22h00</p>
                                <p>Sábado e domingo: 9h00 às 21h00</p>
                            </div>
                        </div>
                    </div>
                    <div className="company-description">
                        <p>Na Lossantos Brasil, somos totalmente especializados em modelos de smartwatches 2025, pulseiras, acessórios e soluções de conectividade.</p>
                        <p>Atendemos consumidores que buscam tecnologia para saúde, esportes e estilo de vida, oferecendo produtos confiáveis, suporte especializado e uma experiência de compra online simplificada.</p>
                        <p>Trazemos modelos modernos de marcas reconhecidas, garantindo qualidade, inovação e praticidade no seu dia a dia.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SobreNosPage;