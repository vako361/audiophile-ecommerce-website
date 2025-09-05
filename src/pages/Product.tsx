import { useParams } from "react-router-dom"
import data from "../data/data.json"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Description from "../components/Description"
import Gallery from "../components/Gallery"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useCart } from "../main"
import { type Product, } from "../types/productType"
export default function Product() {
  const { productId } = useParams()
  const {cart, setCart} = useCart()
  const product = data.find(
    (item) => item.id === Number(productId) 
  )
  const addCart = (product: Product) => {
    if(quantity === 0) return
    const cartProduct = {
      name: product.name,
      price: product.price,
      image: product.image.mobile, 
      quantity
    }
setCart((prev) =>
{ prev = prev.map((item) =>
    item.name === cartProduct.name
      ? { ...item, quantity}
      : item
  )
if (!prev.find(item => item.name === cartProduct.name)){
   prev.push(cartProduct)
}
return prev
}
)
  }
  console.log(cart)
  const [quantity, setQuantity] = useState(0)
  const suggestion = data.filter(item => item.slug !== product?.slug).slice(0, 3)
useEffect(() => {
    window.scrollTo(0, 0)
  },
  [productId])

  if (!product) {
    return (
      <section>
        <Header />
        <h2 className="text-center mt-10">Product not found</h2>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-7 ">
      <Header />
      <div className="flex flex-col pl-4 pr-4 gap-8 justify-center mt-16">
        <img src={product.image.mobile} alt="" className="rounded-[8px]" />
        <p className="text-[#D87D4A] text-[14px] tracking-[14px]">NEW PRODUCT</p>
        <h2 className="text-[28px] font-[700] text-black ">{product.name}</h2>
        <p className="opacity-50 leading-6">{product.description}</p>
        <span className="text-[18px] font-[700]">{`$ ${product.price}`}</span>
        <div className="flex gap-4">
          <div className="flex items-center justify-around w-[120px] h-[48px] bg-[#F1F1F1]">
            <span className="cursor-pointer" onClick={() => quantity !== 0 && setQuantity(quantity - 1)}>-</span>
            {quantity}
            <span className="cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</span>
          </div>
          <button className="text-white bg-[#D87D4A] w-[160px] h-[48px]" onClick={() => addCart(product)}>ADD TO CART</button>
        </div>

        <section className="flex flex-col gap-6"> 
          <h2 className="text-black text-[24px] font-[700]">FEATURES</h2>
          <p className="opacity-50 tracking-[0.87px]">{product.features}</p>
        </section>

        <div className="flex flex-col">
          <h2 className="font-[700] text-[24px] uppercase">in the box</h2>
          <div className="flex flex-col gap-2 mt-4">
            {product.includes.map(item => 
              <p key={item.item} className="text-[#D87D4A]">
                {item.quantity}x<span className="text-black ml-4 opacity-50">{item.item}</span>
              </p>
            )}
          </div>
        </div>

        <section className="flex flex-col gap-6 mt-[100px]">
          <img src={product.gallery.first.mobile} alt="" />
          <img src={product.gallery.second.mobile} alt="" />
          <img src={product.gallery.third.mobile} alt="" />
        </section>

        <section className="flex flex-col items-center justify-center gap-14 w-full">
          <h2 className="uppercase text-[24px] font-[600]">you may also like</h2>
          {suggestion.map(item => 
            <div key={item.id} className="flex flex-col gap-8 items-center justify-center">
              <div className="w-[327px] h-[160px] bg-[#F1F1F1] flex items-center justify-center">
                <img src={item.categoryImage.mobile} className="h-[120px] w-[120px]" alt="" />
              </div>
              <h2 className="uppercase text-[24px] font-[600] ">{item.name}</h2>
              <Link to={`/${item.category}/${item.id}`}>
                <button className="w-[160px] h-[48px] bg-[#D87D4A] text-white">see more</button>
              </Link>
            </div>
          )}
        </section>
      </div> 
      <Gallery />
      <Description />
      <Footer />
    </section>
  )
}
