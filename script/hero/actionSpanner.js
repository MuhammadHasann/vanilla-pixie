const config = {
  actions: [
    "content creators",
    "researchers",
    "journalists",
    "marketing teams",
    "and many more ...",
  ],
};

const actionSpanner = document.querySelector(".action-spanner");

let intervalId = 0;

actionSpanner.textContent = config.actions[intervalId];

const animateTextChange = () => {
  gsap.to(actionSpanner, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      intervalId =
        intervalId === config.actions.length - 1 ? 0 : intervalId + 1;
      actionSpanner.textContent = config.actions[intervalId];
      gsap.to(actionSpanner, {
        opacity: 1,
        duration: 0.5,
      });
    },
  });
};

setInterval(animateTextChange, 2000);
