import { useParams } from "react-router-dom"
import data from "../data/data.json"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"

export default function Product() {
  const { productId, category } = useParams()
  const [quantity, setQuantity] = useState<number>(0)
  const product = data.find(
    (item) => item.id === Number(productId) 
  )

  if (!product) {
    return (
      <section>
        <Header />
        <h2 className="text-center mt-10">Product not found</h2>
      </section>
    )
  }

  return (
    <section className="flex flex-col ">
      <Header />
   <div className="flex flex-col pl-4 pr-4 gap-8 justify-center mt-16">
    <img src={product.image.mobile} alt="" className="rounded-[8px]" />
    <p className="text-[#D87D4A] text-[14px] tracking-[14px]">NEW PRODUCT</p>
    <h2 className="text-[28px] font-[700] text-black ">{product.name}</h2>
    <p className="opacity-50 leading-6">{product.description}</p>
    <span className="text-[18px] font-[700]">{`$ ${product.price}`}</span>
    <div className="flex gap-4">
      <div className="flex items-center justify-around w-[120px] h-[48px] bg-[#F1F1F1]">
        <span className="cursor-pointer" onClick={() => quantity !== 0 && setQuantity(quantity - 1)} >-</span>
        {quantity}
        <span className="cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</span>
      </div>
      <button className="text-white bg-[#D87D4A] w-[160px] h-[48px]">ADD TO CART</button>
    </div>

    
    <section className="flex flex-col gap-6"> 
      <h2 className="text-black text-[24px] font-[700]">FEATURES</h2>
      <p  className="opacity-50 tracking-[0.87px]">{product.features}</p>

    </section>

    <div className="flex flex-col">
      <h2 className="font-[700] text-[24px] uppercase">in the  box</h2>
      <p><span></span></p>
      <p><span></span></p>
    </div>

   </div> 
 <Footer />
    </section>
  )
}
