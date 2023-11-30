import Hero from '../../components/Hero/Hero'
import Treatmenst from '../../components/Treatmenst/Treatmenst.jsx'
import "./Home.css"
import { GiHeartPlus } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaRegRegistered } from "react-icons/fa";    
import { IoIosChatbubbles } from "react-icons/io";
const Home = () => {
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
    <h1>WHY CHOOSE CRYSTALLINE CLINIC?</h1>
    <hr />
    <div className="reasons_container">
        <div className="reason">
            <div className="icon"><GiHeartPlus /></div>
            <h2>AFTER CARE</h2>
            <span>We don’t just care at the appointment, we care after too!</span>
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
            <div className="icon">IoIosChatbubbles</div>
            <h2>TRUSTWORTHY</h2>
            <p>We won’t give you anything you want, we will advise you to what we think is the correct treatment for you.</p>
        </div>  
        

    </div>
</div>
    </div>
  )
}

export default Home