import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaInstagram, FaSearch, FaTiktok, FaTimes } from 'react-icons/fa'; // Example icons from react-icons
import "./Navbar.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const scrollThreshold = 100; // Adjust the scroll threshold as needed

      // Check if the scroll value is greater than the threshold
      setIsSticky(scrollValue > scrollThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav
        className={`w-full  flex flex-row justify-between items-center py-3 px-10   bg-white text-black shadow-sm
        
        ${isSticky ? 'sticky top-0 ' : ''}
        `}
      >
        <Link to={"/"} className="logo" onClick={scrollToTop} >
        
        <img className="logo_image" src="./images/logo_spa.png" alt="" />
        </Link>
        <div className={`links ${isMobile ? 'mobile' : ''}`}>
          <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8`}>
            <li>
              <Link onClick={scrollToTop} to="/">Home</Link>
            </li>
            <li>
              <Link  to="/about"onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>About</Link>
            </li>
            <li>
              <Link  to="/services"onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Services</Link>
            </li>
            <li>
              <Link  to="/contact" onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>Contact</Link>
            </li>
            <li>
            <Link  to={"/track"} className="bookNowBtn"onClick={()=>{ setIsMobile(false)
               scrollToTop()} 
              }>
          Book Now
        </Link>
            </li>
          </ul>
        </div>
        
        <div className="mobile-menu-icon" onClick={handleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      <div className="bottom_nav flex items-center justify-between px-8 border border-gray-300 py-3">
        <div className="left flex items-center gap-4">
            <span className="location flex items-center gap-2">
                <FaLocationDot/> <span className="text-sm">4927 Jonesboro Rd Suite B Forest Park GA 30297</span>
            </span>
            <span className="mail flex items-center gap-2 border-gray-300 border-l border-r px-3">
<IoMdMail/> <span className="text-sm">Get In Touch </span>
            </span>
        </div>
        <div className="right flex items-center gap-4">
            <div className="custom_input_search flex items-center border border-gray-500 px-3 py-2">
                <input type="text" placeholder="Search..."  className="w-36 border-none outline-none" />
                <FaSearch/>
            </div>
            <hr />
            <div className="social_media flex items-center gap-2">
               <div className="icon border border-gray-500 px-2 py-2 rounded-sm">

               <FaInstagram className="text-xl"/>
               </div>
               <div className="icon   border border-gray-500 px-2 py-2 rounded-sm">
                <FaTiktok className="text-xl"/>
               </div>
             </div>   
        </div>
      </div>
    </>
  );
}

export default Navbar;
