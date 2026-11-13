import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import { Services, Why, Process } from "./sections/Content.jsx";
import Blog from "./sections/Blog.jsx";
import Contact from "./sections/Contact.jsx";
import { useActiveSection } from "./hooks.jsx";

export default function App() {
  const active = useActiveSection(["home", "services", "why", "process", "blog", "contact"]);
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
