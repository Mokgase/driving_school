import Navbar from "../Components/Navbar/Navbar";
import Programs from "../Components/Programs/Programs";
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: "Programs | Driving School",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Programs />
      </main>
      <Footer />
    </>
  );
}
