document.addEventListener("DOMContentLoaded", function () {
  const cards = Array.from(document.querySelectorAll(".research-card .card"));
  const demoVideoCardAnimation = document.querySelector(".demo-video");
  const sourceVideoCardAnimation =
    demoVideoCardAnimation.querySelector("source");

  let cardOrder = cards.map((card) =>
    parseInt(card.getAttribute("data-index-card"))
  );

  const updateCardPositions = () => {
    cards.forEach((card) => {
      card.className = card.className
        .split(" ")
        .filter((c) => !c.startsWith("card-position-"))
        .join(" ");
    });

    cardOrder.forEach((index, position) => {
      const cardElement = cards.find(
        (card) => parseInt(card.getAttribute("data-index-card")) === index
      );

      cardElement.style.zIndex = cards.length - position;
      cardElement.style.bottom = `${20 * position}%`;

      cardElement.classList.add(`card-position-${position}`);

      if (position === 0) {
        cardElement.classList.remove("card-hover");
        cardElement.classList.add("card-active");
      } else {
        cardElement.classList.add("card-hover");
        cardElement.classList.remove("card-active");
      }
    });

    const cardPositionUpdatedEvent = new Event("cardPositionUpdated");
    document.dispatchEvent(cardPositionUpdatedEvent);
  };

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const clickedIndex = parseInt(e.target.getAttribute("data-index-card"));

      sourceVideoCardAnimation.src = `public/research/${clickedIndex - 1}.mp4`;
      demoVideoCardAnimation.load();
      demoVideoCardAnimation.play();

      gsap.from(".research-demo-video", {
        y: 50,
        filter: "blur(4px)",
        opacity: 0,
      });

      if (cardOrder[0] !== clickedIndex) {
        const clickedCardIndex = cardOrder.indexOf(clickedIndex);

        cardOrder.splice(clickedCardIndex, 1);
        cardOrder.unshift(clickedIndex);

        updateCardPositions();
      }
    });
  });

  updateCardPositions();
});
