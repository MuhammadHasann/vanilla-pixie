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
  .to("#action", { opacity: 0 });
