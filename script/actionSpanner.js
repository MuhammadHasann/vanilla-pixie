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

// Function to animate text transition
function animateTextChange() {
  // Animate the fade out
  gsap.to(actionSpanner, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      // Update the text
      intervalId =
        intervalId === config.actions.length - 1 ? 0 : intervalId + 1;
      actionSpanner.textContent = config.actions[intervalId];
      // Animate the fade in
      gsap.to(actionSpanner, {
        opacity: 1,
        duration: 0.5,
      });
    },
  });
}

// Set interval to change text every 2 seconds
setInterval(animateTextChange, 2000);
