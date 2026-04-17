import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: "About Us | Driving School",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
