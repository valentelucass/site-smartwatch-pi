import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminAccessoriesPage = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || 'http://localhost:3001'
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

  const handleDelete = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir este acessório?')
    if (!confirm) return
    try {
      setDeletingId(id)
      const base = import.meta.env.VITE_API_URL || 'http://localhost:3001'
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
          <ul>
            {items.map(p => (
              <li key={p.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  <strong>{p.name || p.title}</strong> — R$ {p.price}
                </span>
                <div>
                <Link
                  to={`/admin/accessories/${p.id}/edit`}
                  className="admin-btn"
                  style={{ marginRight: '0.5rem' }}
                >
                  Editar
                </Link>
                <button
                  className="admin-btn admin-btn-danger"
                  onClick={() => handleDelete(p.id)}
                  disabled={deletingId === p.id}
                >
                  {deletingId === p.id ? 'Excluindo...' : 'Excluir'}
                </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AdminAccessoriesPage