function openForm(formId) {
  var formElement = document.getElementById(formId);
  if (formElement) {
    formElement.style.display = "block";
  }
}


function closeForm(formId) {
  var formElement = document.getElementById(formId);
  formElement.style.display = "none";
}

function closeForm2()
{
  document.getElementById("form-div").style.display = "none";


}

function closeComplaint(buttonId1,buttonId2,messageDivId) {
  
  document.getElementById(buttonId1).style.display = 'none';

  document.getElementById(buttonId2).style.display = 'none';
 
  document.getElementById(messageDivId).style.display = 'block';
  
}

function cevapVer(textId,areaId) {
  
  var cevapText = document.getElementById(areaId).value;

  
  document.getElementById(textId).innerText = 'Cevap: ' + cevapText;

  

}

const searchBar = document.getElementById('searchInput');
const complaintDecks = document.querySelectorAll('.card-deck');

// Add an event listener to the search bar
searchBar.addEventListener('input', function () {
    const searchTerm = searchBar.value.toLowerCase();

    complaintDecks.forEach(deck => {
        const deckCards = deck.querySelectorAll('.card');
        const deckText = Array.from(deckCards).map(card => card.innerText.toLowerCase()).join(' ');

        const isMatch = deckText.includes(searchTerm);

        if (isMatch) {
            // Move the deck to the top
            deck.parentElement.prepend(deck);
        }

        // Show or hide individual cards based on the search term
        deckCards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            const isCardMatch = cardText.includes(searchTerm);
            card.style.display = isCardMatch ? 'block' : 'none';
        });
    });
});