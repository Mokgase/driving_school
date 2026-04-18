import Navbar from "../Components/Navbar/Navbar";
import Contact from "./Contact";
import Footer from "../Footer/Footer";

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
