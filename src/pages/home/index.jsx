import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const products = [
    { id: 1, name: 'Watch 10 slm - 44mm', price: 'R$549,00', imgSrc: '/images-home/image3.png' },
    { id: 2, name: 'Watch 10 slm - 47mm', price: 'R$459,00', imgSrc: '/images-home/image4.png' },
    { id: 3, name: 'Watch 10 slm - 45mm', price: 'R$499,00', imgSrc: '/images-home/image5.png' },
    { id: 4, name: 'Watch 9 slm - 41mm', price: 'R$359,00', imgSrc: '/images-home/image1.png' }
];

const Home = () => {
    return (
        <>
            <Header />
            {/* Usamos 'page-wrapper' para definir o fundo branco padrão */}
            <main className="page-wrapper">
                {/* Seção Hero Principal (Fundo preto full-width) */}
                <section className="hero-section hero-main">
                    <div className="section-container"> {/* Container centralizado */}
                        <div className="hero-content">
                            <h1>Watch 10 <br /> Ultra - 2025</h1>
                            {/* CTA leva para a listagem de Smartwatches */}
                            <Link to="/smartwatch" className="hero-cta-text" style={{ textDecoration: 'none' }}>Compre agora</Link>
                        </div>
                        <div className="hero-image1">
                            <img src="/images-home/image1.png" alt="Watch 10 Ultra 2025" />
                        </div>
                    </div>
                </section>

                {/* Seção de Produtos (Fundo branco full-width) */}
                <section className="products-section">
                    <div className="section-container"> {/* Container centralizado */}
                        <h2>Principais escolhas dos clientes</h2>
                        <p>Encontre o smartwatch ideal para seu estilo com nossa seleção dos modelos mais vendidos.</p>
                        <div className="products-grid">
                            {products.map(product => (
                                <div key={product.id} className="product-card">
                                    <Link to="/smartwatch" className="product-card-link"><div className="product-image-container">
                                        <img src={product.imgSrc} alt={product.name} />
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p className="price">{product.price}</p></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção de Novidade (Fundo preto full-width) */}
                <section className="hero-section hero-secondary">
                    <div className="section-container"> {/* Container centralizado */}
                        <div className="hero-image">
                            <img src="/images-home/image2.png" alt="Novidade Watch 10 Ultra" />
                        </div>
                        <div className="hero-content">
                            <p className="subtitle">Novidade</p>
                            <h2>Watch 10 Ultra</h2>
                            <Link to="/smartwatch" className="cta-button" style={{ textDecoration: 'none', display: 'inline-block' }}>Compre agora</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;