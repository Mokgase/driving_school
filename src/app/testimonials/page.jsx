import Navbar from "../Components/Navbar/Navbar";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";

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
