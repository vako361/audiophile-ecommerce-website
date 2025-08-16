import { useLocation, useParams } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const { category } = useParams();

  console.log(location);

  return (
    <div
      className={`flex flex-col ${
        pathname === "/" ? "h-[600px]" : "h-[192px]"
      } justify-between bg-no-repeat bg-[10%_40%] bg-cover ${pathname === '/' ? "bg-[url('/assets/home/mobile/image-header.jpg')]" : 'bg-[#000]'}`}
    >
      <div className="flex items-center w-full h-6 justify-around">
        <div className="flex gap-[40%] mt-8 items-center">
          <img src="./assets/Group.svg" className="w-4 h-[15px]" alt="Menu" />
          <img src="./assets/header.svg" className="h-[25px]" alt="" />
        </div>
        <img
          src="./assets/cart.svg"
          className="w-[23px] h-[20px] self-center mt-7"
          alt=""
        />
      </div>

      {pathname === "/" ? (
        <section className="flex flex-col gap-5 text-white items-center h-full justify-center">
          <span className="opacity-50 tracking-[10px]">NEW PRODUCT</span>
          <h2 className="uppercase text-[36px] text-center font-[400]">
            XX99 Mark II HeadphoneS
          </h2>
          <p className="text-center opacity-65 text-[15px] leading-6 w-[328px]">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="text-center w-[160px] h-[48px] bg-[#D87D4A] cursor-pointer uppercase">
            See Product
          </button>
        </section>
      ) : (
        <div className="flex mb-8 justify-center items-center">
          <h1 className="uppercase text-white text-[28px] font-[700] tracking-[2px]">
            {category}
          </h1>
        </div>
      )}
    </div>
  );
}
