import Navbar from "../Components/Navbar/Navbar";
import FAQ from "../Components/FAQ's/FAQ";
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: "FAQs | Driving School",
};

export default function FAQsPage() {
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
