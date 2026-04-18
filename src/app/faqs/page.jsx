import Navbar from "../Components/Navbar/Navbar";
import FAQ from "./FAQ";
import Footer from "../Footer/Footer";

export const metadata = {
  title: "FAQs | Driving School",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
