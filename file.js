const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  searchInput.classList.toggle('active');
  searchButton.classList.toggle('active');
  searchInput.focus();
});
