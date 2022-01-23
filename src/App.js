import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import FeaturesComponent from "./components/FeaturesComponent";
import PricingComponent from "./components/PricingComponent";
import CtaComponent from "./components/CtaComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <div className="body-wrap">
        <HeaderComponent />
        <main>
          <HeroComponent />

          <FeaturesComponent />

          <PricingComponent />

          <CtaComponent />
        </main>

        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
