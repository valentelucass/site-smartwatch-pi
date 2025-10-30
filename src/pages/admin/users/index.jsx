import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminUsersPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || 'http://localhost:3001'
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
        <ul>
          {users.map(u => (
            <li key={u.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>
                <strong>{u.name || `${u.firstName} ${u.lastName}`}</strong> — {u.email} ({u.role || 'user'})
              </span>
              <div>
                <Link to={`/admin/users/${u.id}/edit`} className="admin-btn">Editar</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AdminUsersPage