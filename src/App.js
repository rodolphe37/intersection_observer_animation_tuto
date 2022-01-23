import "./App.css";
import "./animation.css";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import FeaturesComponent from "./components/FeaturesComponent";
import PricingComponent from "./components/PricingComponent";
import CtaComponent from "./components/CtaComponent";
import FooterComponent from "./components/FooterComponent";
import { useLayoutEffect } from "react";
import useIsInViewport from "./hooks/useIsInViewport";

function App() {
  const { inViewport, Obs, obsOptions } = useIsInViewport();

  useLayoutEffect(() => {
    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }, [inViewport, Obs, obsOptions]);

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
