const lottieHero = document.querySelector(".lottie_hero");
let isPlayingBackward = false;

const toggleAnimationDirection = (backward) => {
  if (backward) {
    lottieHero.pause();
  } else {
    lottieHero.play();
    lottieHero.seek(55);
  }
};

lottieHero.addEventListener("complete", (e) => {
  toggleAnimationDirection(isPlayingBackward);
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".cont",
  start: "top top",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {
    gsap.to("#box", {
      y: self.progress * 300,
      rotation: self.progress * 360,
      overwrite: "auto",
    });

    const progressThreshold = 0.1;
    const isPastThreshold = self.progress > progressThreshold;

    if (isPastThreshold !== isPlayingBackward) {
      const speed = isPastThreshold ? 2 : 1;
      const direction = isPastThreshold ? -1 : 1;

      lottieHero.setSpeed(speed);
      lottieHero.setDirection(direction);
      isPlayingBackward = isPastThreshold;
      lottieHero.play();

      isPastThreshold && lottieHero.seek(10);
    }
  },
});
