const videoIdeate = document.querySelector(".video-ideate");

let isPLay = false;

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".cont_common-ideate",
  start: "top top",
  end: "bottom +=50%",
  scrub: true,
  onUpdate: (self) => {
    if (self.progress > 0.1 && self.progress < 1 && !isPLay) {
      isPLay = true;
      videoIdeate.play();
    } else if ((self.progress <= 0.1 || self.progress >= 1) && isPLay) {
      isPLay = false;
      videoIdeate.pause();
    }
  },
});
