import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
      <div className="row">
        <div className="col">
          <img src="src/components/Images/logo.png" alt="Logo" className="logo-ft" />
          <p>Founded in 2015 in Delhi, India, our company designs world-class temperature sensors with precision and reliability. Our team of top engineers and technicians ensures superior quality and innovation in every product. We pride ourselves on providing exceptional service support to meet all our customers' needs. Experience the best in sensor technology with us.</p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>Reg. billing add.-H.NO.-T1, Tekhnad Village,</p>
          <p>Near DLF Prime</p>
          <p>Tower, Okhla Phase, Delhi 110020</p>
          <p className="e-mail">point1control@gmail.com</p>
          <h4>+91-8920266426, +91-8447354268</h4>
        </div>
        <div className="col">
          <h3>Links <div className="underline"><span></span></div></h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="form.html">Services</a></li>
            <li><a href="form.html">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="form.html">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="underline"><span></span></div></h3>
          <form>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Enter your email" required className="f-inp"/>
            <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
          </form>
          <div className="social-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Point1 Control © 2024 - All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Footer
