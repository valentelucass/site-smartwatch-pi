import React, { useEffect, useState } from 'react'

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || 'http://localhost:3001'
    const url = `${base}/orders`
    const fetchOrders = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setOrders(Array.isArray(data) ? data : [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  return (
    <div className="admin-card">
      <h1>Pedidos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: '#ffb3b3' }}>Erro: {error}</p>}
      {!loading && orders.length === 0 && (
        <p className="empty-state">Nenhum pedido cadastrado.</p>
      )}
      {!loading && orders.length > 0 && (
        <ul>
          {orders.map(o => (
            <li key={o.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
              <strong>#{o.id}</strong> — status: {o.status} — itens: {Array.isArray(o.items) ? o.items.length : 0}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AdminOrdersPage

