import { useState, useEffect } from 'react'
import { getProductById } from '../services/productService'
import { useParams } from 'react-router'



function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)


  useEffect(() => {
    async function fetchProduct() {
      const response = await getProductById(id)
      setProduct(response.data)
    }
    fetchProduct()
  }, [id])
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