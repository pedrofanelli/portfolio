function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);

  return thresholds;
}

function handleIntersect(entries: any) {
  entries.forEach(
    (entry: any) => (entry.target.style.opacity = entry.intersectionRatio)
  );
}

const transitionOpacity = (element: any, marg: boolean = false) => {
  let observer: any;

  let options = {
    root: null,
    rootMargin: marg ? "-200px 0px -200px 0px" : "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);

  element.forEach((el: any) => {
    observer.observe(el);
  });

  return;
};

export default transitionOpacity;
