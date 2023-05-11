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

function handleIntersect2(entries: any) {
  let hola = document.getElementById("containerBtns");
  entries.forEach(
    (entry: any) => {
      if (entry.intersectionRatio > 0.15) {
        hola && (hola.style.display = 'block')
      } else {
        hola && (hola.style.display = 'none')
      }
    }
  );
}

const transitionOpacity = (element: any, marg: boolean = false, sticky: boolean = false) => {
  let observer: any;

  let options = {
    root: null,
    rootMargin: marg ? "-200px 0px -200px 0px" : "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(sticky ? handleIntersect2 : handleIntersect, options);

  element.forEach((el: any) => {
    observer.observe(el);
  });

  return;
};

export default transitionOpacity;
