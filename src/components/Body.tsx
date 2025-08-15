
const category = [
  {
    category: "HEADPHONES",
    image: "/assets/category/image-removebg-headphones.png",
    default: "shop",
  },
  {
    category: "SPEAKERS",
    image: "/assets/category/image-removebg-speaker.png",
    default: "shop",
  },
  {
    category: "EARPHONES",
    image: "/assets/category/image-removebg-airpods.png",
    default: "shop",
  },
];



export default function Body () {

    return(
        <div className="pl-6 pr-6 flex flex-col gap-[118px]">
      <section className="w-full mt-[120px] flex items-center bg-white justify-center flex-col gap-13">
        {category.map(({ category, image, default: defaultText }) => (
          <div
            key={category}
            className="text-white flex rounded-[8px] flex-col items-center justify-center 
                       relative w-[327px] h-[165px] bg-[#F1F1F1] gap-5 pt-[50px]"
          >
            <img
              className="absolute top-[-50px]"
              src={image}
              alt={`${category} icon`}
            />
            <h2 className="text-black tracking-[1.071px] text-[15px] font-[700]">
              {category}
            </h2>
            <p className="text-black opacity-50">
              {defaultText}
         
            </p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6 font-[Manrope]">
      <div className="bg-[#D87D4A] flex flex-col pl-6 pr-6 items-center justify-center text-white h-[600px] rounded-[8px] gap-7">
        <img src="/assets/home/mobile/image-speaker-zx9.png" className="w-[172px]  h-[207px]" alt="speker image" />
        <h2 className="text-[36px] font-[600] tracking-[1.286px] leading-10 text-center">ZX9 SPEAKER</h2>
        <p className="text-center font-[400] text-[15px] leading-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button className="bg-black w-[160px] h-[48px]">See Product</button>
      </div>
 
    <div className="flex flex-col 
    bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]
     bg-[100%_90%] bg-cover h-[400px] 
     items-center justify-center gap-8  ">
         <h2 className="text-[36px] font-[600] tracking-[2px]  leading-10 text-center">ZX7 SPEAKER</h2>
         <button className="w-[160px] font-[700] border-[1px] border-black h-[48px]">
          See Product
          </button>
      </div>
            <img src="/assets/home/mobile/image-earphones-yx1.jpg" alt="" 
            />
      <div className="h-[200px] gap-8 bg-[#F1F1F1] flex flex-col items-center justify-center">
        <h2 className="text-[28px] font-[600] 
        tracking-[2px] uppercase">
           YX1 EARPHONES
        </h2>
         <button className="w-[160px] font-[700] border-[1px] border-black h-[48px]">
          See Product
          </button>
      </div>
      </section>

      <section className="flex flex-col gap-9 font-[Manrope]">
        <img src="/assets/shared/mobile/image-best-gear.jpg" alt="avatar" />
         <h2 className="text-center text-black tracking-[1px] uppercase text-[28px] font-[700]">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
         </h2>
         <p className="opacity-50 text-black font-[400] text-[15px] leading-6 text-center mb-[120px]">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
         </p>
      </section>
      </div>
    )
}