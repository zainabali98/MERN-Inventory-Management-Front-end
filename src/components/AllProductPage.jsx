import { useState, useEffect } from 'react'
import { Link } from 'react-router' // or 'react-router-dom' depending on your setup
import { getProducts } from '../services/productService'

function AllProductPage() {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProducts()
        setProduct(response.data)
      } catch (err) {
        setError('Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [])

  if (loading) return <div className="dialogue-box-loading">Loading Poké Mart inventory...</div>
  if (error) return <div className="dialogue-box-error">{error}</div>

  return (
    <section className="products-page">
      {/* GBA Clerk Dialogue Header Box */}
      <div className="gba-clerk-banner">
        <h1 className="products-title">POKé MART</h1>

        <p>Welcome! What can I do for you today?</p>
      </div>

      <div className="products-subtitle-container">
        <p className="products-subtitle">Please select an item to buy.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            {/* Top-Right Icon Badge */}
            <div className="card-badge">
              {product.category === 'pokeballs' && '⚪'}
              {product.category === 'medicine' && '🧪'}
              {product.category === 'berries' && '🍒'}
              {product.category === 'other' && '📦'}
            </div>

            <h2>{product.title}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-info">Category: {product.category}</p>
            <p className="product-info">In Bag: {product.quantity}</p>

            <div className="product-card-actions">
              <Link to={`/products/${product._id}`} className="gba-btn">VIEW</Link>
              <Link to={`/products/${product._id}/edit`} className="gba-btn edit">EDIT</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllProductPage