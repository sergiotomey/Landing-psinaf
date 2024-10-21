import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Testimonial from "./components/Testimonial";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Benefits />
        <Collaboration />
        <Testimonial />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
