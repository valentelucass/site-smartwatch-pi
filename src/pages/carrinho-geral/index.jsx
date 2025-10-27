import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);

const CartPage = () => {
    return (
        <div className="cart-page">
            <Header />
            <main className="cart-container">
                <div className="cart-layout">
                    <div className="cart-items-section">
                        <div className="cart-header">
                            <span className="header-product">Produto</span>
                            <span className="header-price">Preço</span>
                            <span className="header-quantity">Quantidade</span>
                            <span className="header-subtotal">Subtotal</span>
                        </div>
                        <div className="cart-item">
                            <div className="product-details">
                                <img src="https://via.placeholder.com/80x80/000000/FFFFFF?text=Watch" alt="Watch 10 Ultra" />
                                <span>Watch 10 Ultra</span>
                            </div>
                            <span className="item-price">R$499,00</span>
                            <div className="quantity-selector">
                                <input type="number" defaultValue="1" min="1" />
                            </div>
                            <span className="item-subtotal">R$499,00</span>
                            <button className="remove-item-btn">
                                <TrashIcon />
                            </button>
                        </div>
                    </div>

                    <div className="cart-summary-section">
                        <h2>Carrinho total</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>R$499,00</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>R$499,00</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn">Checkout</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;