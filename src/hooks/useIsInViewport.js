// Custom hook for detecting if is in viewport
const useIsInViewport = () => {
  const inViewport = (entries) => {
    //Animation every time you scroll (without condition)
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
    // EXAMPLE WITH ANIMATION ONLY AT FIRST LOAD
    // Animation only one time (at first load)
    // entries.forEach((entry) => {
    // This condition is added - if entry is in viewport for the first time only
    //   if (entry.isIntersecting) {
    //     setTimeout(() => {
    //       entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    //     }, 100);
    //   }
    //   return;
    // });
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

  return { inViewport, Obs, obsOptions };
};

export default useIsInViewport;
