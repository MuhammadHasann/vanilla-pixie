gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
  },
});

tl.to("#heading1", { scale: 0.9, opacity: 0 })
  .to("#heading2", { scale: 0.9, opacity: 0 })
  .to("#heading3", { scale: 0.9, opacity: 0 })
  .to("#paragraph", { opacity: 0 })
  .to("#description", { opacity: 0 })
  .to("#action", { opacity: 0 })
  .to("#lottie_hero", { opacity: 0 }, "-=0.5");

let texts = gsap.utils.toArray(".cont_text-description");
texts.forEach((text) => {
  gsap.from(
    text,
    {
      y: 25,
      opacity: 0,
      filter: "blur(4px)",
      duration: 1,
    },
    1
  );
});

gsap.from("#cont_heading", {
  y: 25,
  opacity: 0,
  filter: "blur(4px)",
  duration: 1,
});
gsap.from("#lottie_hero", {
  y: 25,
  opacity: 0,
  filter: "blur(4px)",
  duration: 1,
});
