  function deckCard(dealCards){
    let result;
    let totalCard = dealCards.concat(dealCards);
    result = totalCard.sort(function() {
    return 0.5 - Math.random();
   });
    return result;
  }
  
  function distributedCard(dealCards){
    let table = document.querySelector("#table");
    let shuffledCards = deckCard(dealCards);
  
    table.innerHTML = "";
  
    shuffledCards.forEach(function(element){
    let card = document.createElement("div");
    
    card.innerHTML = 
    "<div class='card' data-value = " + element + ">" +
   "<div class='card_content'>" +
   element + 
    "</div>" +
    "</div>";
    
    table.appendChild(card);
  });
  
  }