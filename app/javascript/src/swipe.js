if(location.pathname == "/users") {

  $(function () {
    let allCards = document.querySelectorAll('.swipe--card');

      function initCards() {
        allCards.forEach(function (card, index) {
          card.style.zIndex = allCards.length - index;
          card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
          card.style.opacity = (10 - index) / 10;
        });
      }

      initCards();

  });

}