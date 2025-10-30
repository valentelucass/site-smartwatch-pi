import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './index.css';
import { API_BASE_URL } from '../../utils/config';

const CadastroPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        const newUser = {
            firstName,
            lastName,
            companyName,
            email,
            password
        };

        try {
            const base = API_BASE_URL;
            const response = await fetch(`${base}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                navigate('/login');
            } else {
                alert("Erro ao realizar o cadastro. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro na comunicação com o servidor:", error);
            alert("Não foi possível conectar ao servidor.");
        }
    };

    return (
        <div className="cadastro-page">
            <Header />
            <main className="cadastro-container">
                <div className="cadastro-box">
                    <h1>Faça seu cadastro</h1>
                    <form className="cadastro-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Primeiro nome</label>
                                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Último nome</label>
                                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="companyName">Nome da Empresa (opcional)</label>
                            <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="email">Endereço e-mail</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="password">Digite a sua senha</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="confirmPassword">Digite novamente a senha</label>
                            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="submit-btn">Finalizar</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CadastroPage;