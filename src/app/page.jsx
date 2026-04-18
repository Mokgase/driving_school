import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Programs/Programs";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
