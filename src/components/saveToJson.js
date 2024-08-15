const saveToJson = (data) => {
  // Get the existing data from localStorage
  let movieStore = JSON.parse(localStorage.getItem('movieStore')) || { movies: { all: { titles: [] } }, series: { all: { titles: [] } } };

  // Add the new data to the appropriate category
  if (data.category === 'movie') {
    movieStore.movies.all.titles.push(data);
  } else if (data.category === 'series') {
    movieStore.series.all.titles.push(data);
  }

  // Save the updated data back to localStorage
  localStorage.setItem('movieStore', JSON.stringify(movieStore));
  console.log(data);
  console.log('Data saved successfully to localStorage!');
};

export default saveToJson;
