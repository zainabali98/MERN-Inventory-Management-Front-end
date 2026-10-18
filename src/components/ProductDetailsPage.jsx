import { useState, useEffect } from 'react'
import { getProductById } from '../services/productService'
import { useParams } from 'react-router'



function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProductById(id)
        setProduct(response.data)
      } catch (error) {
        setError('Failed to fetch product')
      }
    }

    fetchProduct()
  }, [id])
  if (error) {
    return <p>{error}</p>
  }
  if (!product) {
    return <p>Loading product...</p>
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}

export default ProductDetailsPage