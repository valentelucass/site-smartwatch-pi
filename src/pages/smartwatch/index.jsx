import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { addItem } from '../../utils/cart.js';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';

const SmartWatchPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

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

    // Cálculos para paginação
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

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
                    {!loading && currentProducts.length > 0 ? (
                        currentProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={(product.images && product.images[0]) || 'https://via.placeholder.com/250'} alt={product.title} />
                                </div>
                                <h3>{product.title}</h3>
                                <p className="price">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                                </p>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => {
                                        addItem({
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            image: (product.images && product.images[0]) || null,
                                            type: 'product'
                                        }, 1);
                                        toast.success('Adicionado ao carrinho');
                                    }}
                                >
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        ))
                    ) : !loading && products.length === 0 && (
                        <div className="no-products">
                            <p>Nenhum produto disponível no momento.</p>
                            <p>Os produtos aparecerão automaticamente quando forem adicionados.</p>
                        </div>
                    )}
                </div>

                {!loading && products.length > 0 && (
                    <div className="pagination-info">
                        <p>Mostrando {startIndex + 1}-{Math.min(endIndex, products.length)} de {products.length} produtos</p>
                    </div>
                )}

                {!loading && totalPages > 1 && (
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

export default SmartWatchPage;