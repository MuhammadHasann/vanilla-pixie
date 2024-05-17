const ScrollLottie = (obj) => {
  let anim = lottie.loadAnimation({
    container: document.querySelector(obj.target),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: obj.path,
  });

  let timeObj = { currentFrame: 0 };
  ScrollTrigger.create({
    trigger: obj.target,
    scrub: true,
    start: "top +=50%",
    end: "top top",
    onUpdate: (self) => {
      if (obj.duration) {
        gsap.to(timeObj, {
          duration: obj.duration,
          currentFrame: Math.floor(self.progress * (50 - 1)),
          onUpdate: () => {
            anim.goToAndStop(timeObj.currentFrame, true);
          },
          ease: "expo",
        });
      } else {
        anim.goToAndStop(self.progress * (50 - 1), true);
      }
    },
  });
};

ScrollLottie({
  target: ".lottie_icon",
  path: "../../public/bulb.json",
});
