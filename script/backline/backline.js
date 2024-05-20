document.addEventListener("DOMContentLoaded", () => {
  const backlineOne = document.querySelector(".backline-1");

  document.documentElement.style.setProperty(
    "--top-backline-1",
    `${backlineOne.clientHeight - 5}px`
  );
});

const svgLine = document.querySelector(".svg-line");
const svgPath = svgLine.querySelector("path");

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

gsap.from(svgPath, {
  opacity: 0,
  drawSVG: 0,
  duration: 1.5,
  ease: "ease-in",
});

const svgLineTwo = document.querySelector(".svg-line-2");
const svgRect = svgLineTwo.querySelector("rect");

ScrollTrigger.create({
  trigger: svgLineTwo,
  start: "top 50%",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {
    svgRect.style.height = self.progress * 14790;
  },
});
