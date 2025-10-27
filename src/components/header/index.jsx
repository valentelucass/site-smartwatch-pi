import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

// Ícones
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const BagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleSearch = () => setSearchOpen(!searchOpen);
    const handleSearchChange = (e) => setSearchValue(e.target.value);
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Você buscou: "${searchValue}"`); // aqui você pode redirecionar ou filtrar produtos
        setSearchValue('');
        setSearchOpen(false);
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        LOSSANTOS
                    </div>
                </Link>


                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/smartwatch">Smartwatch</Link>
                    <Link to="/acessorios">Acessórios</Link>
                    <Link to="/sobrenos">Sobre nós</Link>
                </nav>

                <div className="header-icons">
                    <button onClick={toggleSearch} className="search-button">
                        <SearchIcon />
                    </button>

                    <Link to="/carrinho">
                        <BagIcon />
                    </Link>
                    <Link to="/login">
                        <UserIcon />
                    </Link>
                </div>
            </div>

            {/* Campo de pesquisa */}
            {searchOpen && (
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Digite para buscar..."
                        autoFocus
                    />
                    <button type="submit">Buscar</button>
                </form>
            )}
        </header>
    );
};

export default Header;
