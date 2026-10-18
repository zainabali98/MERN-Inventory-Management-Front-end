import { useState, useEffect } from 'react'
import { updateProduct, getProductById } from '../services/productService'
import { useNavigate, useParams } from 'react-router'

function UpdateProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    quantity: ''
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProductById(id)
        setFormData(response.data)
      }
      catch (error) {
        setError('Failed to fetch product')
      }
    }

    fetchProduct()
  }, [id])

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await updateProduct(id, formData)
      navigate(`/products/${id}`)
    } catch (error) {
      setError('Failed to update product')
    }
  }

  return (
  <div>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <button type="submit">Update Product</button>
    </form>
  </div>
)
}

export default UpdateProductPage