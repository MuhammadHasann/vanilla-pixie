const subHeadingIdeate = document.querySelector(".ideate_text span");
const headingIdeate = document.querySelector(".ideate_text h1");
const paragraphIdeate = document.querySelector(".ideate_text p");

gsap.registerPlugin(ScrollTrigger);

let tlIdeate = gsap.timeline({
  scrollTrigger: {
    trigger: ".ideate_text",
    start: "top 90%",
    end: "bottom top",
    scrub: true,
  },
});

tlIdeate
  .from(subHeadingIdeate, { y: 100, opacity: 0 })
  .from(headingIdeate, { y: 50, opacity: 0 }, "-=0.2")
  .from(paragraphIdeate, { opacity: 0 })
  .from(".lottie_icon", { opacity: 0 }, "-=1")
  .from(".cont_video-ideate", { opacity: 0 }, "-=0.75");
