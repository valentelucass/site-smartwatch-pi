import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../../utils/config'

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = API_BASE_URL
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

  const getStatusBadge = (status) => {
    const s = String(status || '').toLowerCase()
    if (s.includes('pago') || s.includes('concl')) return 'is-success'
    if (s.includes('pendente')) return 'is-warning'
    if (s.includes('cancel') || s.includes('falha')) return 'is-danger'
    return 'is-info'
  }

  return (
    <div className="admin-card">
      <h1>Pedidos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: '#ffb3b3' }}>Erro: {error}</p>}
      {!loading && orders.length === 0 && (
        <p className="empty-state">Nenhum pedido cadastrado.</p>
      )}
      {!loading && orders.length > 0 && (
        <ul className="admin-list">
          {orders.map(o => {
            const name = o.customerName || o.customer?.name || 'Cliente'
            const itemsCount = Array.isArray(o.items) ? o.items.length : (o.itemsCount || 0)
            const status = o.status || '—'
            return (
              <li key={o.id} className="admin-list-item">
                <div className="admin-item-main">
                  <div className="admin-thumb" style={{display:'grid',placeItems:'center',fontWeight:700,color:'#cbd5e1',background:'#0f1115'}}>#{String(o.id).slice(-2)}</div>
                  <div>
                    <div className="admin-title">Pedido #{o.id}</div>
                    <div className="admin-meta">{name} • {itemsCount} itens</div>
                  </div>
                </div>
                <div className="admin-item-actions">
                  <span className={`admin-badge ${getStatusBadge(status)}`}>{status}</span>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default AdminOrdersPage

