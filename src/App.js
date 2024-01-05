import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainSection } from "./components/Mainsection";
import { Painting } from "./components/Paintings";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Skills />
      <Projects />
      <Painting />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
