import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import { isAdminEmail } from '../../utils/config';
import './index.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usuarioLogado, setUsuarioLogado] = useState(null);
    const navigate = useNavigate();

    // Efeito para verificar se já existe um login na sessão
    useEffect(() => {
        const usuarioSalvo = localStorage.getItem('usuarioLogado');
        if (usuarioSalvo) {
            setUsuarioLogado(JSON.parse(usuarioSalvo));
        }
    }, []);

    // Função de login (sem alterações)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const base = import.meta.env.VITE_API_URL || 'http://localhost:3001';
            const response = await axios.get(`${base}/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                const user = response.data[0];
                toast.success("Login realizado com sucesso!");
                localStorage.setItem('usuarioLogado', JSON.stringify(user));
                setUsuarioLogado(user);
                navigate('/');
            } else {
                toast.error("E-mail ou senha incorretos.");
            }
        } catch (error) {
            console.error("Erro na comunicação com o servidor:", error);
            toast.error("Não foi possível conectar ao servidor.");
        }
    };

    // Função de logout (sem alterações)
    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        setUsuarioLogado(null);
        toast.success('Você saiu da sua conta.');
    };

    return (
        <div className="login-page">
            <Header />
            <main className="login-container">
                {usuarioLogado ? (
                    // Se o usuário ESTIVER logado, mostra esta tela
                    <div className="login-box">
                        <h1>Você já está conectado</h1>
                        <p className="welcome-message">
                            Bem-vindo(a) de volta, <strong>{usuarioLogado.firstName || usuarioLogado.email}</strong>!
                        </p>

                        {/* ======================= VERIFICAÇÃO DE ADMIN ======================= */}
                        {/* Este link só será renderizado se o email do usuário logado for o do admin */}
                        {isAdminEmail(usuarioLogado.email) && (
                            <Link to="/admin/products" className="submit-btn admin-panel-btn">
                                Acessar Painel do Administrador
                            </Link>
                        )}
                        {/* ==================================================================== */}

                        <button onClick={handleLogout} className="submit-btn logout-btn">
                            Sair
                        </button>

                        <div className="form-links">
                            <Link to="/">Ir para a Loja</Link>
                            <span>|</span>
                            <Link to="/carrinho">Meus Pedidos</Link>
                            <span>|</span>
                            <Link to="/rastreio">Rastreio</Link>
                        </div>
                    </div>
                ) : (
                    // Se NÃO estiver logado, mostra o formulário de login
                    <div className="login-box">
                        <h1>Acesse sua conta</h1>
                        <form className="login-form" onSubmit={handleSubmit}>
                            {/* ... campos do formulário ... */}
                            <div className="form-group">
                                <label htmlFor="email">Endereço e-mail</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Digite a sua senha</label>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
                            </div>
                            <button type="submit" className="submit-btn">Fazer login</button>
                        </form>
                        <div className="form-links">
                            <Link to="/admin/products">Painel administrador</Link>
                            <span>|</span>
                            <Link to="/cadastro">Fazer cadastro</Link>
                            <span>|</span>
                            <Link to="/esqueci-senha">Esqueci a senha</Link>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;