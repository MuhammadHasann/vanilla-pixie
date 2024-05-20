document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let tlJourney = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont_journey",
      start: "top 50%",
      end: "bottom bottom",
      scrub: true,
    },
  });

  tlJourney
    .from(".journey p", { y: 100, opacity: 0 })
    .from(".journey h1", { y: 100, opacity: 0 }, "-=0.2")
    .from(".join-waitlist_journey", { opacity: 0 });
});
