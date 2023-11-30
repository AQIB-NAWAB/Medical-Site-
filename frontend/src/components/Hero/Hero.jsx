import { FaChevronRight } from "react-icons/fa"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <div className="content">
            <h1>Fantay Beauty Wellness </h1>
            <span>Enhancing and Magnifying, Beauty in Every Body</span>
            <button>View Services <div className="icon"><FaChevronRight/></div></button>
        </div>
        <div className="image">
            <img src="https://crystallineclinic.co.uk/wp-content/uploads/2023/08/2-e1691491995584-768x439.png.webp" alt="" />
        </div>
    </div>
  )
}

export default Hero