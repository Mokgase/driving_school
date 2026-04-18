import Navbar from "../Components/Navbar/Navbar";
import Testimonials from "./Testimonials";
import Footer from "../Footer/Footer";

export const metadata = {
  title: "Testimonials | Driving School",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
