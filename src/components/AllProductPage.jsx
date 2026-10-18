import { useState, useEffect } from 'react'
import { getProducts } from '../services/productService'





function AllProductPage() {

  const [products, setProduct] = useState([])

  useEffect(() => {
    async function fetchProduct() {
      const response = await getProducts()
      setProduct(response.data)
    }
    fetchProduct()
  }, [])

  return (
    <div>
      {products.map((product) => (
        <p key={product._id}>{product.title}</p>
      ))}
    </div>
  )
}

export default AllProductPage