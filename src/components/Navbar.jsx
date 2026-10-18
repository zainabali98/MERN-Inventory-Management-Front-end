
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">All Products</Link>
            <Link to="/products/create">Add Product</Link>
        </nav>
    )
}

export default Navbar
