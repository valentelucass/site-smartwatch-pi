import React from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const BoxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const UserCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4.5"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>;
const WarehouseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 21V7l-9-4-9 4v14h18z"></path><path d="M13 21V11l-4 3"></path><path d="M9 21V11l4 3"></path><path d="M3 10l9 4 9-4"></path></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;


const Rastreio = () => {
    return (
        <div className="order-details-page">
            <Header />
            <main className="order-details-container">
                <div className="order-summary-header">
                    <span>#96459761</span>
                    <span>R$698,00</span>
                </div>
                <p className="delivery-forecast">Chegada prevista do pedido: 23 de janeiro de 2021.</p>

                <div className="status-tracker">
                    <div className="step completed">
                        <div className="step-icon"><BoxIcon /></div>
                        <span>Pedido realizado</span>
                    </div>
                    <div className="step active">
                        <div className="step-icon"><UserCheckIcon /></div>
                        <span>Embalando</span>
                    </div>
                    <div className="step">
                        <div className="step-icon"></div>
                        <span>Em rota de entrega</span>
                    </div>
                    <div className="step">
                        <div className="step-icon"></div>
                        <span>Pedido entregue</span>
                    </div>
                </div>

                <div className="activity-timeline">
                    <h2>Atividade do pedido</h2>
                    <div className="timeline-item">
                        <div className="timeline-icon"><CheckIcon /></div>
                        <div className="timeline-content"><span>Seu pedido foi entregue. Obrigado por comprar na Lossantos!</span><time>23 Jan, 2021 at 2:01 PM</time></div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><UserCheckIcon /></div>
                        <div className="timeline-content"><span>Nosso entregador (John Wick) retirou seu pedido para entrega.</span><time>23 Jan, 2021 at 2:00 PM</time></div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><WarehouseIcon /></div>
                        <div className="timeline-content"><span>Seu pedido chegou aos centro de distribuição.</span><time>20 Jan, 2021 at 8:00 AM</time></div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><HomeIcon /></div>
                        <div className="timeline-content"><span>Seu pedido saiu a caminho da sua casa.</span><time>20 Jan, 2021 at 6:30 AM</time></div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><CheckIcon /></div>
                        <div className="timeline-content"><span>Seu pedido foi verificado com sucesso.</span><time>20 Jan, 2021 at 7:32 PM</time></div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><BoxIcon /></div>
                        <div className="timeline-content"><span>Pedido entregue.</span><time>19 Jan, 2021 at 2:01 PM</time></div>
                    </div>
                </div>

                <div className="product-list">
                    <h2>Produto (02)</h2>
                    <div className="product-table-header">
                        <span>PRODUTOS</span>
                        <span>PREÇO</span>
                        <span>QUANTIDADE</span>
                        <span>SUB-TOTAL</span>
                    </div>
                    <div className="product-item">
                        <div className="product-info">
                            <img src="/fallback.svg" alt="Watch Ultra" />
                            <div>
                                <span className="product-cat">SMARTWATCH</span>
                                <p>Watch Ultra 10 - Relógio Inteligente de última geração com Rastreamento Avançado de Saúde e Atividades</p>
                            </div>
                        </div>
                        <span className="desktop-only">R$299,00</span>
                        <span className="desktop-only">x1</span>
                        <span className="desktop-only">R$299,00</span>
                        <div className="product-details">
                            <div className="detail-item">
                                <div className="detail-label">Preço</div>
                                <div className="detail-value">R$299,00</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Qtd</div>
                                <div className="detail-value">x1</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Total</div>
                                <div className="detail-value">R$299,00</div>
                            </div>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="product-info">
                            <img src="/fallback.svg" alt="Watch 10" />
                            <div>
                                <span className="product-cat">SMARTWATCH</span>
                                <p>Watch Série 10 - Smartwatch avançado com monitoramento de saúde, notificações e design moderno.</p>
                            </div>
                        </div>
                        <span className="desktop-only">R$399,00</span>
                        <span className="desktop-only">x1</span>
                        <span className="desktop-only">R$399,00</span>
                        <div className="product-details">
                            <div className="detail-item">
                                <div className="detail-label">Preço</div>
                                <div className="detail-value">R$399,00</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Qtd</div>
                                <div className="detail-value">x1</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Total</div>
                                <div className="detail-value">R$399,00</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customer-details">
                    <div className="details-box">
                        <h3>Nome do destinatário</h3>
                        <p><strong>Gilvan</strong><br />Apartamento 50, Casa 1320/C, Rua 13/a, Room 04, post Tejuri Bazar, Dhaka - 1205, Bangladesh</p>
                        <p><strong>Contato:</strong> +55 99999-9999</p>
                        <p><strong>Email:</strong> kevin.gilbert@email.com</p>
                    </div>
                    <div className="details-box">
                        <h3>Endereço de envio</h3>
                        <p><strong>Lucas Andrade</strong><br />Rua Ibernon Martins, 55</p>
                        <p><strong>Contato:</strong> +55 99999-9999</p>
                        <p><strong>Email:</strong> kevin.gilbert@email.com</p>
                    </div>
                    <div className="details-box">
                        <h3>Informações</h3>
                        <p>Smartwatch X200, cor preta, funções de monitoramento de saúde e notificações, 1 unidade.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Rastreio;