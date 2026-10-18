import { useState, useEffect } from 'react'
import { getProducts } from '../services/productService'





function AllProductPage() {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      const response = await getProducts()
      setProduct(response.data)
      setLoading(false)
    }
    fetchProduct()
  }, [])

  if (loading) {
  return <p>Loading products...</p>
}
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.title}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default AllProductPage