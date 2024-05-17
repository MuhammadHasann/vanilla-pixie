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

lottieHero.addEventListener("complete", () => {
  toggleAnimationDirection(isPlayingBackward);
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#cont_hero",
  start: "top top",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
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
