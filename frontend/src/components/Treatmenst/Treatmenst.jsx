import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Treatmenst.css'
import { Link } from 'react-router-dom';
const Treatmenst = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
    const services=[
        {
            service_name:"Liquid BBL",
            image:"https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-4-732x1024.jpg.webp",
        },{
            service_name:"Fat Dissolving",
            image:"https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-3-1-732x1024.jpg.webp",
        },
        {
            service_name:"Platelet Rich Plasma",
            image:"https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-5-732x1024.jpg.webp",
        },
        {
            service_name:"Medical Weight-loss",
            image:"./images/weightLoss.png",
        },
        {
            service_name:"Vitamin Boosters",
            image:"https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-7-732x1024.jpg.webp",
        },
        {
            service_name:"Derma Fillers",
            image:"https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-2-1-1024x724.jpg.webp",
        },
    ]
  return (
    <div className='treatments '>
    <h1 className="text-center ">Fanty Beauty Wellness Treatments</h1>
    <div className="service_container w-[95%] mx-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        showArrows={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={8000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {services.map((service, index) => (
          <div key={index} className='w-[240px] h-[450px] overflow-hidden carousel-item'>
            <Link to={"/services"} className="service flex flex-col">
              <img src={service.image} alt={service.service_name} className='h-[380px] w-[100%] object-cover ' />
              <button className='bg-teal-700 text-white py-2'>{service.service_name}</button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
  )
}

export default Treatmenst





