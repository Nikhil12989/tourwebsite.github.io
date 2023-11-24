import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="footer-container">
    
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>

    </>
    
  )
}

export default Footer