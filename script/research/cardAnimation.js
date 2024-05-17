document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".research-card");
  const cards = Array.from(document.querySelectorAll(".research-card .card"));

  // Initialize an array with the initial order of the cards
  let cardOrder = cards.map((card) =>
    parseInt(card.getAttribute("data-index-card"))
  );

  function updateCardPositions() {
    cardOrder.forEach((index, position) => {
      const cardElement = cards.find(
        (card) => parseInt(card.getAttribute("data-index-card")) === index
      );

      // Set the z-index and bottom position based on the new order
      cardElement.style.zIndex = cards.length - position;
      cardElement.style.bottom = `${20 * position}%`;

      // Enable or disable the click event based on position
      if (position === 0) {
        cardElement.classList.remove("card-hover");
        cardElement.classList.add("card-active");
      } else {
        cardElement.classList.add("card-hover");
        cardElement.classList.remove("card-active");
      }
    });
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      const clickedIndex = parseInt(this.getAttribute("data-index-card"));

      if (cardOrder[0] !== clickedIndex) {
        // Find the index of the clicked card in the cardOrder array
        const clickedCardIndex = cardOrder.indexOf(clickedIndex);

        // Move the clicked card to the first position
        cardOrder.splice(clickedCardIndex, 1); // Remove the clicked card from its current position
        cardOrder.unshift(clickedIndex); // Add the clicked card to the start of the array

        // Update the positions of the cards
        updateCardPositions();
      }
    });
  });

  // Initial position update
  updateCardPositions();
});
