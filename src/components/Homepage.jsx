import React from 'react'
import { Link } from 'react-router'

function Homepage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center'
    }}>
      <h1 className="form-title" style={{ fontSize: '24px', marginBottom: '16px' }}>
        MAIN MENU
      </h1>

      <p className="product-info" style={{ marginBottom: '8px' }}>
        Hi there! Welcome to the POKé MART. How can I help you today?
      </p>

      <p className="product-info" style={{ marginBottom: '24px' }}>
        Manage your inventory, register new items, or browse the catalog.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '280px'
      }}>
        <Link to="/products" className="gba-btn primary" style={{ textDecoration: 'none', padding: '12px' }}>
          BROWSE MART
        </Link>
        <Link
          to="/products/create"
          className="gba-btn"
          style={{ textDecoration: 'none', padding: '12px', backgroundColor: '#e88838' }}
        >
          ADD NEW ITEM
        </Link>
      </div>
    </div>
  )
}

export default Homepage