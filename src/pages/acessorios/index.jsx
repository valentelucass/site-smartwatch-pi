import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const AcessoriosPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const base = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        axios.get(`${base}/accessories`)
            .then((response) => {
                const data = Array.isArray(response.data) ? response.data : [];
                setItems(data);
            })
            .catch((err) => {
                setError(err.message);
                console.warn('Erro ao carregar acessórios:', err.message);
                setItems([]);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="acessorios-page">
            <Header />
            <main className="acessorios-container">
                <h1>Acessórios</h1>

                {loading && (
                    <div className="loading-container">
                        <p>Carregando acessórios...</p>
                    </div>
                )}

                {error && !loading && (
                    <div className="error-container">
                        <p>⚠️ Não foi possível conectar ao servidor. Mostrando página sem itens.</p>
                    </div>
                )}

                <div className="products-grid">
                    {!loading && items.length > 0 ? (
                        items.map((item) => (
                            <div key={item.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={(item.images && item.images[0]) || 'https://via.placeholder.com/250'} alt={item.title || item.name} />
                                </div>
                                <h3>{item.title || item.name}</h3>
                                <p className="price">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                                </p>
                            </div>
                        ))
                    ) : !loading && (
                        <div className="no-products">
                            <p>Nenhum acessório disponível no momento.</p>
                            <p>Os itens aparecerão automaticamente quando forem adicionados.</p>
                        </div>
                    )}
                </div>

                {!loading && items.length > 0 && (
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

export default AcessoriosPage;