import Navbar from "../Components/Navbar/Navbar";
import About from "./About";
import Footer from "../Footer/Footer";

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
