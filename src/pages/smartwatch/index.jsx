import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const SmartWatchPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const base = import.meta.env.VITE_API_URL || 'http://localhost:3001';
                const response = await axios.get(`${base}/products`);
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
                console.warn('Erro ao carregar produtos:', err.message);
                // Não bloqueia a página, apenas define produtos como array vazio
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="smartwatch-page">
            <Header />
            <main className="smartwatch-container">
                <h1>SmartWatches</h1>
                
                {loading && (
                    <div className="loading-container">
                        <p>Carregando produtos...</p>
                    </div>
                )}

                {error && !loading && (
                    <div className="error-container">
                        <p>⚠️ Não foi possível conectar ao servidor. Mostrando página sem produtos.</p>
                    </div>
                )}

                <div className="products-grid">
                    {!loading && products.length > 0 ? (
                        products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={product.images[0] || 'https://via.placeholder.com/250'} alt={product.title} />
                                </div>
                                <h3>{product.title}</h3>
                                <p className="price">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                                </p>
                            </div>
                        ))
                    ) : !loading && (
                        <div className="no-products">
                            <p>Nenhum produto disponível no momento.</p>
                            <p>Os produtos aparecerão automaticamente quando forem adicionados.</p>
                        </div>
                    )}
                </div>

                {!loading && products.length > 0 && (
                    <nav className="pagination">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn next">Next</button>
                    </nav>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SmartWatchPage;