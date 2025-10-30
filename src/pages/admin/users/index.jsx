import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../../utils/config'

const AdminUsersPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = API_BASE_URL
    const url = `${base}/users`
    const fetchUsers = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(Array.isArray(data) ? data : [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="admin-card">
      <h1>Usuários</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: '#ffb3b3' }}>Erro: {error}</p>}
      {!loading && users.length === 0 && (
        <p className="empty-state">Nenhum usuário cadastrado.</p>
      )}
      {!loading && users.length > 0 && (
        <ul className="admin-list">
          {users.map(u => {
            const name = u.name || `${u.firstName || ''} ${u.lastName || ''}`.trim() || u.email
            const role = (u.role || 'user').toLowerCase()
            const roleClass = role === 'admin' ? 'is-success' : 'is-info'
            return (
              <li key={u.id} className="admin-list-item">
                <div className="admin-item-main">
                  <div className="admin-thumb" style={{display:'grid',placeItems:'center',fontWeight:700,color:'#cbd5e1',background:'#0f1115'}}>{name?.[0]?.toUpperCase() || 'U'}</div>
                  <div>
                    <div className="admin-title">{name}</div>
                    <div className="admin-meta">{u.email}</div>
                  </div>
                </div>
                <div className="admin-item-actions">
                  <span className={`admin-badge ${roleClass}`}>{role}</span>
                  <Link to={`/admin/users/${u.id}/edit`} className="admin-btn">Editar</Link>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default AdminUsersPage