// Custom hook for detecting if is in viewport
const useIsInViewport = () => {
  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        }, 100);
      }
      return;
    });
  };
  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 40;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {
    root: null,
    rootMargin: "0px",
    // thresholds: 0.5,
    threshold: buildThresholdList(),
  }; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
  ELs_inViewport.forEach((EL) => {
    Obs.observe(EL, obsOptions);
  });

  return inViewport;
};

export default useIsInViewport;
