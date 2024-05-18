document.addEventListener("DOMContentLoaded", () => {
  const ScrollLottieResearch = (obj) => {
    let animResearch = lottie.loadAnimation({
      container: document.querySelector(obj.target),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: obj.path,
    });

    let timeObjResearch = { currentFrame: 0 };
    ScrollTrigger.create({
      trigger: obj.target,
      scrub: true,
      start: "top +=50%",
      end: "top top",
      onUpdate: (self) => {
        if (obj.duration) {
          gsap.to(timeObjResearch, {
            duration: obj.duration,
            currentFrame: Math.floor(self.progress * (100 - 1)),
            onUpdate: () => {
              animResearch.goToAndStop(timeObjResearch.currentFrame, true);
            },
            ease: "expo",
          });
        } else {
          animResearch.goToAndStop(self.progress * (100 - 1), true);
        }
      },
    });
  };

  ScrollLottieResearch({
    target: ".lottie_icon-research",
    path: "../../public/lens.json",
  });
});
