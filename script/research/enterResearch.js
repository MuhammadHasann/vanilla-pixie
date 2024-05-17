const subHeadingResearch = document.querySelector(".research-text span");
const headingResearch = document.querySelector(".research-text h1");

gsap.registerPlugin(ScrollTrigger);

let tlResearch = gsap.timeline({
  scrollTrigger: {
    trigger: ".research-text",
    start: "top 90%",
    end: "bottom top",
    scrub: true,
  },
});

tlResearch
  .from(subHeadingResearch, { y: 100, opacity: 0 })
  .from(headingResearch, { y: 50, opacity: 0 }, "-=0.2")
  .from(".research_demo", { opacity: 0 }, "-=1");
