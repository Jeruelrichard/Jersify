//Opens Search form
function openSearch() {
  document.querySelector(".searchArea").classList.add("active");
  document.body.classList.add("no-scroll");
}

//Closes Search form
function closeSearch() {
    document.querySelector(".searchArea").classList.remove("active");
    document.body.classList.remove("no-scroll");
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

//SEARCH FUNCTIONALITY

const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchSuggestions.style.display = 'none';
    searchSuggestions.innerHTML = '';
    return;
  }
  const matchedProducts = window.ALL_PRODUCTS.filter(product =>
    product.title.toLowerCase().includes(query)).slice(0, 8); // Limits to top 8 suggestions

  if (matchedProducts.length === 0) {
    searchSuggestions.style.display = 'none';
    return;
  }

  searchSuggestions.innerHTML = matchedProducts.map(item => `
    <div onclick="selectSuggestion('${item.title}')">
    ${highlight(item.title, query)}
    </div>`).join('') /*joins everything into one big HTML string*/;

    searchSuggestions.style.display = 'block';
});

function selectSuggestion(title) {
  searchInput.value = title;
  searchSuggestions.style.display = 'none';

  //redirect to products page with search query
  window.location.href = `/htmlFiles/allProducts.html?q=${encodeURIComponent(title)}`;
}

function highlight(text, query) {
  const regex = new RegExp(`(${query})`, 'ig');
  return text.replace(regex, '<strong>$1</strong>');
}