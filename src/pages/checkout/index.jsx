import React from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <Header />
            <main className="checkout-container">
                <h1>Finalizar Pagamento</h1>
                <div className="checkout-layout">
                    <form className="billing-details-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Primeiro nome</label>
                                <input type="text" id="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Último nome</label>
                                <input type="text" id="lastName" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Nome da Empresa (opcional)</label>
                            <input type="text" id="companyName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">País / Região</label>
                            <select id="country" defaultValue="brasil">
                                <option value="brasil">Brasil</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Endereço</label>
                            <input type="text" id="address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">Bairro</label>
                            <select id="district" defaultValue="osasco">
                                <option value="osasco">Osasco</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contato</label>
                            <input type="text" id="contact" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Endereço e-mail</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="additionalInfo">Informações adicionais</label>
                            <textarea id="additionalInfo" rows="4"></textarea>
                        </div>
                    </form>

                    <div className="order-summary">
                        <div className="summary-box">
                            <div className="summary-header">
                                <span>Produto</span>
                                <span>Subtotal</span>
                            </div>
                            <div className="summary-item">
                                <span>Watch 10 mini × 1</span>
                                <span>R$499,00</span>
                            </div>
                            <div className="summary-subtotal">
                                <span>Subtotal</span>
                                <span>R$499,00</span>
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>R$499,00</span>
                            </div>
                        </div>
                        <div className="payment-methods">
                            <div className="payment-option">
                                <input type="radio" id="bankTransfer" name="paymentMethod" defaultChecked />
                                <label htmlFor="bankTransfer">Pagamento via Transferência Bancária</label>
                                <div className="payment-description">
                                    Faça seu pagamento diretamente em nossa conta bancária. Por favor, utilize o ID do seu pedido como referência no pagamento. Seu pedido não será enviado até o pagamento ser compensado.
                                </div>
                            </div>
                            <div className="payment-option">
                                <input type="radio" id="creditCard" name="paymentMethod" />
                                <label htmlFor="creditCard">Cartão de Crédito/Débito</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" id="onDelivery" name="paymentMethod" />
                                <label htmlFor="onDelivery">Pagamento na entrega</label>
                            </div>
                        </div>
                        <p className="privacy-note">
                            Seus dados pessoais serão utilizados para melhorar sua experiência em nosso site, gerenciar o acesso à sua conta e manter a sua privacidade como descrito em nossa <a href="#">Política de Privacidade</a>.
                        </p>
                        <button type="submit" className="place-order-btn">Efetuar Compra</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;