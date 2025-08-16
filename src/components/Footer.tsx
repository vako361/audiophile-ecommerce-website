import { useNavigate } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate()
    return(
        <div className="flex pl-6 pre-6 bg-[#101010] gap-12 flex-col justify-center items-center">
        <div className="flex flex-col gap-12 items-center justify-center">
           <div className="h-1 w-[101px] bg-[#D87D4A]"></div> 
           <img src="/assets/header.svg" alt="company name" />
        </div>
        <section className="flex text-[13px] 
        leading-6 tracking-[2px] uppercase font-[500] flex-col items-center justify-center gap-3 text-white">
            <span onClick={() => navigate('/')} >Home</span>
            <span onClick={() => navigate('/headphones')}>HEADPHONES</span>
            <span onClick={() => navigate('/speakers')}>SPEAKERS</span>
            <span onClick={() => navigate('/earphones')}>EARPHONES</span>
        </section>
        <section className="flex flex-col gap-12">
        <div className="opacity-50 text-white flex flex-col items-center justify-center gap-12">
            <p>
               Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week. 
            </p>
            <span>Copyright 2021. All Rights Reserved</span>
        </div>
            <div className="flex mb-12 items-center justify-center">
                <img src="/assets/contact/contact.svg" alt="conatct section" />
              
            </div>
       </section>
        </div>
    )
}