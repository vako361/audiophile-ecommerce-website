import { useParams } from "react-router-dom"
import data from '../data/data.json'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description"
import Gallery from "../components/Gallery"
export default function Category () {
   const { category } = useParams()
    const products = data.filter((item) => item.category === category)
     return(
        <div className="flex flex-col gap-16 text-black text-[14px] font-[Manrope] text-center">
         <Header />
         <section className="flex flex-col gap-30 pl-6 pr-6">
         {products.map((item, index) => 
         <div className="flex flex-col gap-6 items-center justify-center" key={item.id}>
             <img src={item.categoryImage.mobile} className="h-[352px] rounded-[8px]" alt="produc icons" />
            {index == 0 && <p className="text-[#D87D4A] tracking-2.5  font-[400]">NEW PRODUCT</p>}
             <h2 className="text-center text-[28px] font-[700] tracking-[1px] uppercase ">XX99 Mark II Headphones</h2>
             <p className="leading-6 opacity-50 ">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
             <button className="bg-[#D87D4A] w-40 h-12 text-white">SEE PRODUCT</button>
         </div> 
      )}
      </section>
           <Gallery />
           <Description />
           <Footer />
        </div>
     )
}