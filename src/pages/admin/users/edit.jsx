import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../add-produto/index.css'
import { API_BASE_URL } from '../../../utils/config'

const AdminEditUserPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const base = API_BASE_URL
    fetch(`${base}/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setFirstName(data.firstName || '')
        setLastName(data.lastName || '')
        setCompanyName(data.companyName || '')
        setEmail(data.email || '')
        setPassword(data.password || '')
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const base = API_BASE_URL
      const payload = {
        firstName,
        lastName,
        companyName,
        email,
        password,
      }
      const res = await fetch(`${base}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Falha ao salvar o usuário')
      navigate('/admin/users')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="add-product-page">
      <main className="add-product-container">
        <h1>Editar usuário</h1>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: '#ffb3b3' }}>Erro: {error}</p>}
        {!loading && (
          <form onSubmit={handleSubmit} className="add-product-form">
            <div className="form-group">
              <label htmlFor="firstName">Primeiro nome</label>
              <input id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Último nome</label>
              <input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Empresa</label>
              <input id="companyName" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="form-actions">
              <button className="submit-btn" type="submit">Salvar alterações</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/admin/users')}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  )
}

export default AdminEditUserPage