import React from 'react';

function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = document.getElementById('search-input').value;
    console.log(`Searching for: ${query}`);
    // Implement search logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="search-input" placeholder="Search here..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
