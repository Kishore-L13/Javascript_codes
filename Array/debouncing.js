function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // Function to perform the search
  function performSearch(query) {
    console.log('Searching for:', query);
    // Replace with an API call or other search logic as needed
  }

  // Create a debounced version of the search function
  const debouncedSearch = debounce(function() {
    performSearch(this.value);
  }, 500);

  // Attach the debounced function to the input event of the search field
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', debouncedSearch);
