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
export default function () {
    return(
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
    )
}