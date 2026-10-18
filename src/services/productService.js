import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL




export function getProducts() {

  return axios.get(`${BASE_URL}/products`)
}


export function getProductById(productId){
    return axios.get(`${BASE_URL}/products/${productId}`)
}


export function createProduct(productData){
    return axios.post(`${BASE_URL}/products`, productData)
}


export function updateProduct(productId, productData){
    return axios.put(`${BASE_URL}/products/${productId}`, productData)

}

export function deleteProduct(productId){
    return axios.delete(`${BASE_URL}/products/${productId}`)
}