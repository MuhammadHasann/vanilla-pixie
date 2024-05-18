document.addEventListener("DOMContentLoaded", function () {
  const subHeadingResearch = document.querySelector(".research-text span");
  const headingResearch = document.querySelector(".research-text h1");
  const cardClickAnimation = document.querySelectorAll(".card");
  const demoVideo = document.querySelector(".demo-video");

  const handleCardAnimation = () => {
    const cardPosition1 = document.querySelector(".card-position-1");
    const cardPosition2 = document.querySelector(".card-position-2");

    cardPosition1.classList.add("card-animation-1");
    cardPosition2.classList.add("card-animation-2");

    setTimeout(() => {
      cardPosition1.classList.remove("card-animation-1");
      cardPosition2.classList.remove("card-animation-2");
    }, 2000);
  };

  let tlResearch;
  let cardAnimationBounce = false;

  gsap.registerPlugin(ScrollTrigger);

  tlResearch = gsap.timeline({
    scrollTrigger: {
      trigger: ".research-text",
      start: "top 90%",
      end: "bottom top",
      scrub: true,
      onUpdate: (e) => {
        if (e.progress >= 1 && !cardAnimationBounce) {
          cardClickAnimation.forEach((element) => {
            element.style.pointerEvents = "all";
          });

          demoVideo.play();
          handleCardAnimation();
          cardAnimationBounce = true;
        } else if (e.progress < 1 && cardAnimationBounce) {
          cardClickAnimation.forEach((element) => {
            element.style.pointerEvents = "none";
          });

          demoVideo.pause();
          cardAnimationBounce = false;
        }
      },
    },
  });

  const updateGSAPAnimation = () => {
    tlResearch.clear();
    tlResearch.play();
    tlResearch.pause();

    tlResearch
      .from(subHeadingResearch, { y: 100, opacity: 0, overwrite: true })
      .from(headingResearch, { y: 50, opacity: 0, overwrite: true }, "-=0.2")
      .from(".research_demo", { opacity: 0, overwrite: true }, "-=1")
      .from(".card-position-2", { opacity: 0, x: -400, overwrite: true })
      .from(".card-position-1", { opacity: 0, x: -400, overwrite: true })
      .from(".card-position-0", { opacity: 0, x: -400, overwrite: true });

    tlResearch.progress(1);
  };

  updateGSAPAnimation();

  document.addEventListener("cardPositionUpdated", () => {
    updateGSAPAnimation();

    !cardAnimationBounce && handleCardAnimation();
  });
});
