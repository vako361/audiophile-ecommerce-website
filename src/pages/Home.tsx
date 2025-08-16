import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Description from "../components/Description";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="bg-white flex font-[Manrope] flex-col gap-10">
      <Header />

      <div className="pl-6 pr-6 flex flex-col gap-[118px]">
        {/* ZX9 SPEAKER */}
        <section className="flex pl-6 pr-6 flex-col gap-6 font-[Manrope]">
          <div className="bg-[#D87D4A] flex flex-col pl-6 pr-6 items-center justify-center text-white h-[600px] rounded-[8px] gap-7">
            <img
              src="/assets/home/mobile/image-speaker-zx9.png"
              className="w-[172px] h-[207px]"
              alt="ZX9 speaker"
            />
            <h2 className="text-[36px] font-[600] tracking-[1.286px] leading-10 text-center">
              ZX9 SPEAKER
            </h2>
            <p className="text-center font-[400] text-[15px] leading-6">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/zx9Speaker">
              <button className="bg-black w-[160px] h-[48px]">See Product</button>
            </Link>
          </div>

          {/* ZX7 SPEAKER */}
          <div
            className="flex flex-col bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]
            bg-[100%_90%] bg-cover h-[400px] items-center justify-center gap-8"
          >
            <h2 className="text-[36px] font-[600] tracking-[2px] leading-10 text-center">
              ZX7 SPEAKER
            </h2>
            <Link to="/zx7Speaker">
              <button className="w-[160px] font-[700] border-[1px] border-black h-[48px]">
                See Product
              </button>
            </Link>
          </div>

          {/* YX1 EARPHONES */}
          <img src="/assets/home/mobile/image-earphones-yx1.jpg" alt="YX1 earphones" />
          <div className="h-[200px] gap-8 bg-[#F1F1F1] flex flex-col items-center justify-center">
            <h2 className="text-[28px] font-[600] tracking-[2px] uppercase">
              YX1 EARPHONES
            </h2>
            <Link to="/yx1Earphones">
              <button className="w-[160px] font-[700] border-[1px] border-black h-[48px]">
                See Product
              </button>
            </Link>
          </div>
        </section>
      </div>

      <Gallery />
      <Description />
      <Footer />
    </div>
  );
}
