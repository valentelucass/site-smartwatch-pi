import React from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const products = [
    { id: 1, name: 'Watch 10 slm - 44mm', price: 'R$549,00', imgSrc: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Watch1' },
    { id: 2, name: 'Watch 10 slm - 47mm', price: 'R$459,00', imgSrc: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Watch2' },
    { id: 3, name: 'Watch 10 slm - 45mm', price: 'R$499,00', imgSrc: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Watch3' },
    { id: 4, name: 'Watch 9 slm - 41mm', price: 'R$359,00', imgSrc: 'https://via.placeholder.com/200x200/000000/FFFFFF?text=Watch4' }
];

const Home = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                {/* Seção Hero Principal */}
                <section className="hero-section hero-main">
                    <div className="hero-content">
                        <h1>Watch 10 <br /> Ultra - 2025</h1>
                        <button className="cta-button">Compre agora</button>
                    </div>
                    <div className="hero-image1">
                        <img src="public/images-home/image1.png" alt="Watch 10 Ultra 2025" />
                    </div>
                </section>

                {/* Seção de Produtos */}
                <section className="products-section">
                    <h2>Principais escolhas dos clientes</h2>
                    <p>Encontre o smartwatch ideal para seu estilo com nossa seleção dos modelos mais vendidos.</p>
                    <div className="products-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.imgSrc} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="price">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção de Novidade */}
                <section className="hero-section hero-secondary">
                    <div className="hero-image">
                        <img src="https://via.placeholder.com/350x350/000000/FFFFFF?text=Watch+Ultra" alt="Novidade Watch 10 Ultra" />
                    </div>
                    <div className="hero-content">
                        <p className="subtitle">Novidade</p>
                        <h2>Watch 10 Ultra</h2>
                        <button className="cta-button">Compre agora</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;