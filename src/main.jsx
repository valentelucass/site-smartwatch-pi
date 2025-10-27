import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'



import './index.css'
import Home from './pages/home/index.jsx'
import SmartWatchPage from './pages/smartwatch/index.jsx'
import AcessoriosPage from './pages/acessorios/index.jsx'
import SobreNosPage from './pages/sobrenos/index.jsx'
import CheckoutPage from './pages/checkout/index.jsx'
import CarrinhoGeralPage from './pages/carrinho-geral/index.jsx'
import CarrinhoPage from './pages/carrinho/index.jsx'
import CadastroPage from './pages/cadastro/index.jsx'
import LoginPage from './pages/login/index.jsx'
import AddProduto from './pages/add-produto/index.jsx'
import RastreioPage from './pages/rastreio/index.jsx'

// Exemplo de uso das variáveis de ambiente
console.log('API URL:', import.meta.env.VITE_API_URL)
console.log('App Name:', import.meta.env.VITE_APP_NAME)
console.log('Environment:', import.meta.env.MODE)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartwatch" element={<SmartWatchPage />} />
        <Route path="/acessorios" element={<AcessoriosPage />} />
        <Route path="/sobrenos" element={<SobreNosPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/carrinho-geral" element={<CarrinhoGeralPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-produto" element={<AddProduto />} />
        <Route path="/rastreio" element={<RastreioPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
