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
    let btn01 = document.getElementById("btn1");
    let btn02 = document.getElementById("btn2");
    let btn03 = document.getElementById("btn3");
    entries.forEach(
      (entry: any) => {
        if (entry.intersectionRatio > 0.35) {
            
            if (entry.target.id === "card1") {
                btn01 && (btn01.style.backgroundColor = "#e76f51")
                btn02 && (btn02.style.backgroundColor = "#525a61")
                btn03 && (btn03.style.backgroundColor = "#525a61")
            } else if (entry.target.id === "card2") {
                btn02 && (btn02.style.backgroundColor = "#e76f51")
                btn01 && (btn01.style.backgroundColor = "#525a61")
                btn03 && (btn03.style.backgroundColor = "#525a61")
            } else if (entry.target.id === "card3") {
                btn03 && (btn03.style.backgroundColor = "#e76f51")
                btn01 && (btn01.style.backgroundColor = "#525a61")
                btn02 && (btn02.style.backgroundColor = "#525a61")
            }
        }
        
    });
  }
  
  const transitionButtons = (element: any) => {
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };
  
    let observer = new IntersectionObserver(handleIntersect, options);
  
    
    element.forEach((el: any) => {
        observer.observe(el);
      });
    
  
    return;
  };
  
  export default transitionButtons;
  