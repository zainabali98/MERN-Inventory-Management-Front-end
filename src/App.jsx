import { BrowserRouter, Routes, Route } from 'react-router'
import Homepage from './components/Homepage'
import AllProductPage from './components/AllProductPage'
import ProductDetailsPage from './components/ProductDetailsPage'
import CreateProductPage from './components/CreateProductPage'
import UpdateProductPage from './components/UpdateProductPage'
import Navbar from './components/Navbar'



function App() {
    return (


        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<AllProductPage/>} />
                <Route path="/products/create" element={<CreateProductPage/>}/>
                <Route path="/products/:id/edit" element={<UpdateProductPage/>}/>
                <Route path="/products/:id" element={<ProductDetailsPage/>}/>

            </Routes>
        </BrowserRouter>
    )

}

export default App