import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../../utils/config'

const AdminAccessoriesPage = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    const base = API_BASE_URL
    const url = `${base}/accessories`
    const fetchItems = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [])

  const formatBRL = (n) => {
    const num = Number(n || 0)
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num)
  }

  const getStatusClass = (status) => {
    const s = String(status || '').toLowerCase()
    if (s.includes('estoque') && s.includes('em')) return 'is-success'
    if (s.includes('esgot') || s.includes('sem')) return 'is-danger'
    if (s.includes('baixo')) return 'is-warning'
    return 'is-info'
  }

  const handleDelete = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir este acessório?')
    if (!confirm) return
    try {
      setDeletingId(id)
      const base = API_BASE_URL
      const res = await fetch(`${base}/accessories/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Falha ao excluir o acessório')
      setItems(prev => prev.filter(p => p.id !== id))
    } catch (e) {
      setError(e.message)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div>
      <div className="admin-actions">
        <Link to="/admin/accessories/new" className="admin-btn">Adicionar acessório</Link>
      </div>
      <div className="admin-card">
        <h1>Acessórios</h1>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: '#ffb3b3' }}>Erro: {error}</p>}
        {!loading && items.length === 0 && (
          <p className="empty-state">Nenhum acessório cadastrado.</p>
        )}
        {!loading && items.length > 0 && (
          <ul className="admin-list">
            {items.map(p => {
              const title = p.title || p.name || `Acessório #${p.id}`
              const img = (p.images && p.images[0]) || '/fallback.svg'
              const category = p.category || 'Acessório'
              const sku = p.sku || '—'
              const stock = p.stockStatus || '—'
              return (
                <li key={p.id} className="admin-list-item">
                  <div className="admin-item-main">
                    <img className="admin-thumb" src={img} alt={title} />
                    <div>
                      <div className="admin-title">{title}</div>
                      <div className="admin-meta">{category} • SKU {sku}</div>
                    </div>
                  </div>
                  <div className="admin-item-actions">
                    <span className="admin-price">{formatBRL(p.price)}</span>
                    <span className={`admin-badge ${getStatusClass(stock)}`}>{stock}</span>
                    <Link to={`/admin/accessories/${p.id}/edit`} className="admin-btn">Editar</Link>
                    <button
                      className="admin-btn admin-btn-danger"
                      onClick={() => handleDelete(p.id)}
                      disabled={deletingId === p.id}
                    >
                      {deletingId === p.id ? 'Excluindo...' : 'Excluir'}
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AdminAccessoriesPage