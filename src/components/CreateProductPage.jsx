import { useState } from 'react'
import { createProduct } from '../services/productService'
import { useNavigate } from 'react-router'


function CreateProductPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    quantity: ''
  })
  const [error, setError] = useState(null)


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {

      await createProduct(formData)
      navigate('/products')

    }
    catch (error) {
      setError('Failed to create product')
    }

  }
  return (
    <div className="form-page">
      <div className="gba-clerk-banner">
        <p>Restocking the Mart inventory? Register a new item below.</p>
      </div>

      <div className="form-container">
        {error && <p className="form-error">{error}</p>}
        
        <form onSubmit={handleSubmit} className="gba-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="gba-btn primary">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProductPage