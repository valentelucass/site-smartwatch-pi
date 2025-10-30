import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../add-produto/index.css'
import { API_BASE_URL } from '../../../utils/config'

// Ícones para o uploader de imagens (iguais aos da página de adicionar)
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)

const AdminEditProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Smartwatch')
  const [quantity, setQuantity] = useState('')
  const [stockStatus, setStockStatus] = useState('')
  const [images, setImages] = useState([])
  const [description, setDescription] = useState('')

  useEffect(() => {
    const base = API_BASE_URL
    fetch(`${base}/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title || data.name || '')
        setPrice(String(data.price ?? ''))
        setCategory(data.category || 'Smartwatch')
        setQuantity(String(data.quantity ?? ''))
        setStockStatus(data.stockStatus || (Number(data.quantity) > 0 ? 'Em estoque' : 'Fora de estoque'))
        setDescription(data.description || '')
        setImages(Array.isArray(data.images) ? data.images : [])
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    const qty = parseInt(quantity, 10)
    if (!isNaN(qty)) {
      setStockStatus(qty > 0 ? 'Em estoque' : 'Fora de estoque')
    }
  }, [quantity])

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files)
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImages(prev => [...prev, e.target.result])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const base = API_BASE_URL
      const payload = {
        title,
        name: title,
        price: parseFloat(price),
        category,
        quantity: parseInt(quantity || '0', 10),
        stockStatus,
        description,
        images,
      }
      const res = await fetch(`${base}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Falha ao salvar o produto')
      navigate('/admin/products')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="add-product-page">
      <main className="add-product-container">
        <h1>Editar produto</h1>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: '#ffb3b3' }}>Erro: {error}</p>}
        {!loading && (
          <form onSubmit={handleSubmit} className="add-product-form">
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input id="title" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="price">Preço</label>
              <input id="price" type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <input id="category" value={category} onChange={e => setCategory(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantidade</label>
              <input id="quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="stockStatus">Status do estoque</label>
              <input id="stockStatus" value={stockStatus} onChange={e => setStockStatus(e.target.value)} />
            </div>
            <div className="form-group form-images">
              <label>Imagens</label>
              <div className="image-uploader" onClick={() => document.getElementById('imageInput').click()}>
                <UploadIcon />
                <span>Clique aqui para adicionar imagens</span>
                <input
                  type="file"
                  id="imageInput"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
              {images.length > 0 && (
                <div className="image-preview-container">
                  {images.map((image, index) => (
                    <div key={index} className="image-preview">
                      <img src={image} alt={`Preview ${index + 1}`} />
                      <button
                        type="button"
                        className="remove-image"
                        onClick={() => removeImage(index)}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-group description-group">
              <label htmlFor="description">Descrição</label>
              <textarea id="description" rows={6} value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="form-actions">
              <button className="submit-btn" type="submit">Salvar alterações</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/admin/products')}
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

export default AdminEditProductPage