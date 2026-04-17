import Navbar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: "Contact Us | Driving School",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
