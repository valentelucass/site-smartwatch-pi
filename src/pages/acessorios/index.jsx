import React from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const acessoriosProducts = [
    { id: 1, name: 'Pulseira milenium - dourado', price: 'R$119,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+1' },
    { id: 2, name: 'Pulseira londres - roxa', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+2' },
    { id: 3, name: 'Pulseira londres - azul', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+3' },
    { id: 4, name: 'Pulseira londres - verde', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+4' },
    { id: 5, name: 'Pulseira milenium - azul', price: 'R$119,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+5' },
    { id: 6, name: 'Pulseira londres - preta', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+6' },
    { id: 7, name: 'Pulseira londres - marrom', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+7' },
    { id: 8, name: 'Pulseira orion - prata', price: 'R$109,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+8' },
    { id: 9, name: 'Pulseira londres - rose', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+9' },
    { id: 10, name: 'Pulseira gomo - dourado e prata', price: 'R$129,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+10' },
    { id: 11, name: 'Pulseira londres - bege', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+11' },
    { id: 12, name: 'Pulseira londres - rosa', price: 'R$89,00', imgSrc: 'https://via.placeholder.com/250/FFFFFF/000000?text=Acessorio+12' },
];

const AcessoriosPage = () => {
    return (
        <div className="acessorios-page">
            <Header />
            <main className="acessorios-container">
                <div className="products-grid">
                    {acessoriosProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.imgSrc} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                        </div>
                    ))}
                </div>

                <nav className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn next">Next</button>
                </nav>
            </main>
            <Footer />
        </div>
    );
};

export default AcessoriosPage;