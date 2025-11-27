//Opens Search form
function openSearch() {
  document.querySelector(".searchArea").style.display = "block";
  document.getElementById("overlay").style.display = "block";
document.body.classList.add("no-scroll")}

//Closes Search form
function closeSearch() {
    document.querySelector(".searchArea").style.display="none";
    document.getElementById("overlay").style.display= "none";
document.body.classList.remove("no-scroll")
}

//Closes Search when overlay is clicked
function closeSearchOnBackdrop(event) {
    if (event.target.id === 'overlay') {
        closeSearch();
    }
}

//Closes Search when you press esc on keyboard
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeSearch();
    }
});


//I need to work on all these below

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

function filterCards(query) {
      const lowerQuery = query.toLowerCase();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    searchInput.addEventListener('input', () => {
filterCards(searchInput.value);
    });

searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      filterCards(searchInput.value);
    });