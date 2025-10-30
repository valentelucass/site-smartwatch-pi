import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { isAdminEmail } from '../../utils/config'
import './index.css'

const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  // Admin check via localStorage + config
  let isAdmin = false
  try {
    const usuarioLogadoRaw = localStorage.getItem('usuarioLogado')
    const usuarioLogado = usuarioLogadoRaw ? JSON.parse(usuarioLogadoRaw) : null
    isAdmin = !!usuarioLogado && isAdminEmail(usuarioLogado.email)
  } catch (e) {
    isAdmin = false
  }

  if (!isAdmin) {
    return (
      <div className="admin-page" style={{ padding: '2rem', width: '100%' }}>
        <div className="access-denied">
          <h2>Acesso restrito</h2>
          <p>Você não tem permissão para acessar a área administrativa.</p>
          <p>Entre com o e-mail do administrador para continuar.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-topbar">
          <h2>Admin</h2>
          <button
            className="admin-menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="admin-menu-icon" aria-hidden="true"></span>
          </button>
        </div>
        <nav className={`admin-nav ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)}>
          <NavLink to="/admin/products">Produtos</NavLink>
          <NavLink to="/admin/accessories">Acessórios</NavLink>
          <NavLink to="/admin/users">Usuários</NavLink>
          <NavLink to="/admin/orders">Pedidos</NavLink>
          <NavLink to="/">Voltar ao site</NavLink>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout