import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../utils/config';
import { toast } from 'react-hot-toast';
import { addItem } from '../../utils/cart.js';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const AcessoriosPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    useEffect(() => {
        const base = API_BASE_URL;
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

    // Cálculos para paginação
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    // Função para mudar de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Função para gerar números das páginas
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        
        return pageNumbers;
    };

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
                        currentItems.map((item) => (
                            <div key={item.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={(item.images && item.images[0]) || 'https://via.placeholder.com/250'} alt={item.title || item.name} />
                                </div>
                                <h3>{item.title || item.name}</h3>
                                <p className="price">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                                </p>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => {
                                        addItem({
                                            id: item.id,
                                            title: item.title || item.name,
                                            price: item.price,
                                            image: (item.images && item.images[0]) || null,
                                            type: 'accessory'
                                        }, 1);
                                        toast.success('Adicionado ao carrinho');
                                    }}
                                >
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        ))
                    ) : !loading && (
                        <div className="no-products">
                            <p>Nenhum acessório disponível no momento.</p>
                            <p>Os itens aparecerão automaticamente quando forem adicionados.</p>
                        </div>
                    )}
                </div>

                {/* Informações da paginação */}
                {!loading && items.length > 0 && totalPages > 1 && (
                    <div className="pagination-info">
                        <p>
                            Mostrando {startIndex + 1} - {Math.min(endIndex, items.length)} de {items.length} acessórios
                            (Página {currentPage} de {totalPages})
                        </p>
                    </div>
                )}

                {/* Paginação */}
                {!loading && items.length > 0 && totalPages > 1 && (
                    <nav className="pagination">
                        {/* Botão Anterior - só aparece se não estiver na primeira página */}
                        {currentPage > 1 && (
                            <button 
                                className="page-btn"
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Anterior
                            </button>
                        )}

                        {/* Números das páginas */}
                        {getPageNumbers().map((pageNumber, index) => (
                            pageNumber === '...' ? (
                                <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
                            ) : (
                                <button
                                    key={pageNumber}
                                    className={`page-btn ${currentPage === pageNumber ? 'active' : ''}`}
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            )
                        ))}

                        {/* Botão Próximo - só aparece se não estiver na última página */}
                        {currentPage < totalPages && (
                            <button 
                                className="page-btn"
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Próximo
                            </button>
                        )}
                    </nav>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default AcessoriosPage;