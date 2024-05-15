import React from 'react'
import './Footer.css'

const Footeer = () => {
  return (
    <div className="footer">
      <div className="movie-app-section">
        <h1>Download Our App</h1>
        <div>
          <p>imageIcon</p>
          <p>name</p>
        </div>
      </div>
      <div className="navigation-section">
        <h3>Navigation</h3>
        <p>Home</p>
        <p>Categories</p>
        <p>WatchList</p>
      </div>
      <div className="legal-section">
        <h3>Legal</h3>
        <p>General Info</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="contact-us">
        <h3>Contact Us:</h3>
        <p>support@movieBukket.com</p>
        <p>Tel + 1102579520</p>
        <p>OR By Using</p>
        <div className='social-media'>
          <p>facebook</p>
          <p>Instagram</p>
          <p>WhatsApp</p>
        </div>
      </div>
      <div className="share-website">
        <h3>Share Website Via:</h3>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  )
}

export default Footeer