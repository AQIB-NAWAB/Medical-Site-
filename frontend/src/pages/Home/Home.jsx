import Hero from '../../components/Hero/Hero'
import Treatmenst from '../../components/Treatmenst/Treatmenst.jsx'
import "./Home.css"
import { GiHeartPlus } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaRegRegistered, FaStar } from "react-icons/fa";    
import { IoIosChatbubbles } from "react-icons/io";
const Home = () => {
    const reviews = [
        {
            name:"Chloe",
            review:"I had my lips done by the lovely ladies at Fanty Beauty Wellness and I am so happy with the results! They were so professional and made me feel so comfortable, I will definitely be returning for more treatments! Highly recommend!",
            time:"2 days ago"
        },
        {
            name:"Samantha",
            review:"Great service and very professional. The ladies are very friendly and make you feel at ease.",
            time:"2 month ago"


        },
        {
            name:"Mayo",
            review:"Incredible Staff,top notch customer service , Comfortable and clean environment.",
            time:"3 month ago"
        },
        {
            name:"Angos",
            review:"Today I had consultation with Fanty Beauty Wellness and I am very happy with the service. They are very professional and friendly. I will definitely recommend them to my friends and family.",
            time:"5 month ago"
        },{
            name:"Tas",
            review:"Honestly, the customer support is amazing. I had a consultation with them and they were so helpful and informative. I will definitely be booking in with them for my treatment.",
            time:"10 days ago"
        }

    


    ]
    const ramdonColors=["#F87171","#FBBF24","#34D399","#60A5FA","#A78BFA"]
    const getrandomColor = () => {
        return ramdonColors[Math.floor(Math.random() * ramdonColors.length)];
    }
  return (
    <div>
        <Hero/>
        <Treatmenst/>
<div className="banner1 bg-[#3A4F66] flex  justify-between my-10 h-[70vh] overflow-hidden">
    <div className="image flex-1">
        <img src="https://crystallineclinic.co.uk/wp-content/uploads/2023/08/3-768x543.png.webp"  className="h-[100%] w-[80%]" alt="" />
    </div>
    <div className="content flex-1 text-white flex gap-4 flex-col mt-20 ">
        <h1 className='text-teal-200 text-3xl w-[90%] text-center font-thin'>THE ONE STOP HUB FOR ALL THINGS AESTHETICS</h1>
        <p>Your aesthetics journey should not just be a quick fix here and there, it’s an EXPERIENCE and a JOURNEY of enhancing YOUR birth right beauty!
</p>
<br />
<p>At Fanty beauty Wellness , we aim to provide you with a friendly and memorable service as we work with you to achieve your needs. We have a variety of treatments including fat area dissolving, fillers and vitamin boosters.</p>
<button>Book Now</button>
    </div>
</div>

<div className="reasons_to_choose_us">
    <h1 className='text-center text-teal-600 text-4xl font-medium'>WHY CHOOSE Fanty Beauty Wellness ?</h1>
    <hr className='w-[50%] mx-auto bg-teal-500 h-1 mt-1'/>
    <div className="reasons_container flex gap-10 items-center my-20 mx-10">
        <div className="reason">
            <div className="icon"><GiHeartPlus /></div>
            <h2>AFTER CARE</h2>
            <p>We don’t just care at the appointment, we care after too!</p>
        </div>
        <div className="reason">
            <div className="icon"><IoDiamond /></div>
            <h2>LUXURY</h2>
            <p>We offer a bespoke service, so our clients have a luxury experience from start to finish.</p>
        </div>

        <div className="reason">
            <div className="icon"><FaRegRegistered/></div>
            <h2>REGISTERED</h2>
            <p>Not only are we professional, we have the documents to back it up!</p>
        </div>  
        <div className="reason">
            <div className="icon"><IoIosChatbubbles/></div>
            <h2>TRUSTWORTHY</h2>
            <p>We won’t give you anything you want, we will advise you to what we think is the correct treatment for you.</p>
        </div>  
        

    </div>
</div>

<div className="liquid_bbl_offer bg-[#296586] flex h-96">
    <div className="left flex-1 text-center flex flex-col justify-center items-center gap-5 text-white">
        <h1 className='text-4xl font-bold'>LIQUID BBL NOW AVAILABLE</h1>
        <h2>PRICE STARTING FROM DISCOUNT PRICE</h2>
        <button className='bg-white text-teal-700 font-medium py-2 px-4 rounded-sm'>BOOK NOW</button>
    </div>
    <div className="right flex-1">
        <img src="https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-1-5-600x666.png.webp" alt=""  className='h-[100%] w-[100%] object-contain'/>
    </div>
</div>
<div className="asthetic_practitioners flex justify-between px-10  pt-12 items-center mb-10">
    <div className="left flex-1">
        <img src="https://crystallineclinic.co.uk/wp-content/uploads/2023/08/CRYSTALINE-CLINIC-3-768x543.png.webp" alt="" className='h-[100%] w-[80%]'/>
    </div>
    <div className="right flex-1 text-white text-center flex flex-col gap-2">
        <h1 className='text-4xl font-semibold'>ACCREDITED AND QUALIFIED AESTHETIC PRACTITIONERS </h1>
        <p>Fanty Beauty Wellness was established in 2021. Prior to setting up our own clinic we had over 6 years of experience in the NHS, as well as over 10 years of experience within the beauty industry overall.
</p>
<br />
<p>With accredited qualifications and experience, we can confidently say as practitioners that we have an ethical and moral duty to protect our clients. So rest assured – You are in safe hands.</p>
<button>Book Now</button>
    </div>
</div>
<div className="reviews">
    <h1 className='text-center text-teal-600 text-4xl font-medium'>WHAT OUR CLIENTS SAY</h1>
    <hr className='w-[50%] mx-auto bg-teal-500 h-1 mt-1'/>
    <div className="reviews_container flex gap-10 items-center my-20 mx-10 justify-center">
        {reviews.map((review,index)=>(
            <div className="review cursor-pointer bg-[#f1f1f1] py-10 px-4 rounded-sm" key={index}>
            <div className="review_author flex items-center gap-3 my-2">
                <div className="author_image text-white  rounded-full  py-2 px-3 items-center justify-center   text-xl" style={{backgroundColor:getrandomColor()}}>
                {review.name.slice(0,1)}
                </div>
                    <span>
                    <h2 className='font-bold'>{review.name}</h2>
                    <p className='text-sm text-gray-800'>{review.time}</p>
                    </span>
                    
                </div>
                <div className="stars flex my-1">
                <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    
                </div>
                <div className="review_content">
                    <p>{(review.review).slice(0,56)}...</p>
                </div>
                
            </div>
        ))}
    </div>

</div>
    </div>
  )
}

export default Home