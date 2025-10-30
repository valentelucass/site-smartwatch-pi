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
import AdminLayout from './pages/admin/layout.jsx'
import AdminProductsPage from './pages/admin/products/index.jsx'
import AdminAccessoriesPage from './pages/admin/accessories/index.jsx'
import AdminEditProductPage from './pages/admin/products/edit.jsx'
import AdminEditAccessoryPage from './pages/admin/accessories/edit.jsx'
import AdminUsersPage from './pages/admin/users/index.jsx'
import AdminEditUserPage from './pages/admin/users/edit.jsx'
import AdminOrdersPage from './pages/admin/orders/index.jsx'

// Variáveis de ambiente configuradas em .env.local



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
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="products/new" element={<AddProduto />} />
          <Route path="products/:id/edit" element={<AdminEditProductPage />} />
          <Route path="accessories" element={<AdminAccessoriesPage />} />
          <Route path="accessories/new" element={<AddProduto />} />
          <Route path="accessories/:id/edit" element={<AdminEditAccessoryPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="users/:id/edit" element={<AdminEditUserPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
