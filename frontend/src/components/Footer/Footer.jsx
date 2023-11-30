import { FaInstagram, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer bg-[#3A4F66] text-white">
        <div className="col">
            <img src="./images.logo_spa.png" alt="" />
            <div className="content">
                <h1>FIND US</h1>
                <p>4927 Jonesboro Rd Suite B Forest Park GA 30297</p>

            </div>
        </div>
        <div className="col">
            <h1>Explore</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    
                </li>
                <li>
                    <Link to="/about">About</Link>
                    </li>
                <li>
                    <Link to="/services">Services</Link>
                    </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    </li>

            </ul>
            <h1>INFORMATION</h1>
            <ul>
                <li>
                    <Link to="/">Privacy Policy</Link>

                </li>
                <li>
                    <Link to="/">Terms of Use</Link>
                    </li>
                <li>
                <Link to={"/policy/booking"}>
                    Booking Policy

                </Link>
                </li>
            </ul>
        </div>
        <div className="col">
            <h1>DON'T MISS OUT!</h1>
            <p>Subscribe to our newsletter to make sure you never miss our latest special offers, exciting new arrivals and more!</p>
            <div> 
                <input type="email" placeholder="Enter Your Email" className="border-none outline-none"/>
                <button>Subscribe</button>
            </div>
            <div className="socail_icons">
            <div className="icon">
            <FaInstagram/> 

            </div>
            <div className="icon">
<FaTiktok/>
             
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer