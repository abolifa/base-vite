import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Products from "@/components/products";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <div
        className="flex items-center justify-center flex-col gap-5 py-20"
        id="products"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          اكتشف منتجاتنا الطبيعية
        </h2>
        <p className="text-lg md:text-xl text-center max-w-2xl text-[#5c4a35]">
          نقدم مجموعة متنوعة من المنتجات الغذائية الطبيعية عالية الجودة.
        </p>
      </div>
      <Products />
      <Contact />
    </>
  );
};

export default Home;
