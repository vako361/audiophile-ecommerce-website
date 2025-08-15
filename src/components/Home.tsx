import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-white flex font-[Manrope] flex-col gap-10">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
