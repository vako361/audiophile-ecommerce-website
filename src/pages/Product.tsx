import { useParams } from "react-router-dom"
import data from "../data/data.json"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Product() {
  const { productId} = useParams()

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
    <section className="flex flex-col">
      <Header />
   <div className="flex flex-col pl-4 pr-4 gap-8 justify-center">
    <img src={product.image.mobile} alt="" className="rounded-[8px]" />
    <p className="text-[#D87D4A] text-[14px] tracking-[14px]">NEW PRODUCT</p>
    <h2 className="text-[28px] font-[700] text-black ">{product.name}</h2>
    <p className="opacity-50 leading-6">{product.description}</p>
    <span className="text-[18px] font-[700]">{`$ ${product.price}`}</span>
    <div className="flex ">
      <button className="text-white bg-[#D87D4A] w-[160px] h-[48px]">ADD TO CART</button>
      </div>
   </div> 
 <Footer />
    </section>
  )
}
