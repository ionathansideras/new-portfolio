import "./style.css";
import Header from "./components/Header";
import Interval from "./components/Interval";
import Carousel from "./components/Carousel";
import Projects from './components/Projects';

function App() {

  return (
    <div>
      <Header />
      <Interval />
      <Carousel />
      <Projects />
    </div>
  );
}

export default App;
