import Home from "@/sections/Home";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Project from "@/sections/Project";
import Navbar from "@/components/Navbar";


export default function Page() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Footer />  
    </div>
  );
}
