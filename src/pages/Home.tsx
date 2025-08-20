import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Description from "../components/Description";
import Gallery from "../components/Gallery";
import data from "../data/data.json"; // import your JSON

export default function Home() {
  // pick only the featured items you want to show on Home
  const featured = data.filter((item) =>
    ["zx9-speaker", "zx7-speaker", "yx1-earphones"].includes(item.slug)
  );

  return (
    <div className="bg-white flex font-[Manrope] flex-col gap-10">
      <Header />

      <div className="pl-6 pr-6 flex flex-col gap-[118px]">
        <section className="flex pl-6 pr-6 flex-col gap-6 font-[Manrope] text-center">
          {featured.map((product) => {
            if (product.slug === "zx9-speaker") {
              return (
                <div
                  key={product.id}
                  className="bg-[#D87D4A] flex flex-col pl-6 pr-6 items-center justify-center text-white h-[600px] rounded-[8px] gap-7"
                >
                  <img
                    src='/assets/category/image-removebg-speaker.png'
                    className="h-[187px]"
                    alt={product.name}
                  />
                  <h2 className="text-[36px] font-[600] tracking-[1.286px] leading-10 text-center uppercase">
                    {product.name}
                  </h2>
                  <p className="text-center font-[400] text-[15px] leading-6">
                    {product.description}
                  </p>
                  <Link to={`/${product.category}/${product.id}`}>
                    <button className="bg-black w-[160px] h-[48px] uppercase">
                      See Product
                    </button>
                  </Link>
                </div>
              );
            }

            if (product.slug === "zx7-speaker") {
              return (
                <div
                  key={product.id}
                  className="flex flex-col bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]
                  bg-[100%_90%] bg-cover h-[400px] items-start justify-center gap-8 pl-6"
                >
                  <h2 className="text-[28px] font-[600] tracking-[2px] leading-10 text-center uppercase">
                    {product.name}
                  </h2>
                  <Link to={`/${product.category}/${product.id}`}>
                    <button className="w-[160px] font-[700] border-[1px] border-black h-[48px] uppercase">
                      See Product
                    </button>
                  </Link>
                </div>
              );
            }

            if (product.slug === "yx1-earphones") {
              return (
                <div key={product.id} className="flex flex-col gap-6 items-center justify-center">
                  <img
                    src={product.image.mobile.replace("./", "/")}
                    alt={product.name}
                  />
                  <div className="h-[200px] gap-8 bg-[#F1F1F1] flex flex-col items-center justify-center">
                    <h2 className="text-[28px] font-[600] tracking-[2px] uppercase">
                      {product.name}
                    </h2>
                    <Link to={`/${product.category}/${product.id}`}>
                      <button className="w-[160px] font-[700] border-[1px] border-black h-[48px] uppercase">
                        See Product
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </section>
      </div>

      <Gallery />
       <Description />
      <Footer />
    </div>
  );
}
