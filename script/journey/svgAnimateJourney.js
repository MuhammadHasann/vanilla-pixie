const helixs = document.querySelectorAll(".helix");

let svgAnimateJourney = false;

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".cont_journey",
  start: "top 50%",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {
    if (self.progress > 0.4 && !svgAnimateJourney) {
      helixs.forEach((element) => {
        element.classList.remove("end-svg-animate_journey");
        element.classList.add("start-svg-animate_journey");
      });

      svgAnimateJourney = true;
    } else if (self.progress <= 0.4 && svgAnimateJourney) {
      helixs.forEach((element) => {
        element.classList.remove("start-svg-animate_journey");
        element.classList.add("end-svg-animate_journey");
      });

      svgAnimateJourney = false;
    }
  },
});
