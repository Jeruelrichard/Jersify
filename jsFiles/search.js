//I need to work on all these

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

function closeBtn() {
    const closeBtn = document.getElementById("searchBar");
    closeBtn.addEventListener("click", () => {
        document.body.searchBar.style.display.none
    })
}