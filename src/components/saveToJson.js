const saveToJson = (data) => {
  
  let movieStore = JSON.parse(localStorage.getItem('movieStore')) || { movies: { all: { titles: [] } }, series: { all: { titles: [] } } };

  
  if (data.category === 'movie') {
    movieStore.movies.all.titles.push(data);
  } else if (data.category === 'series') {
    movieStore.series.all.titles.push(data);
  }

  localStorage.setItem('movieStore', JSON.stringify(movieStore));
  console.log(data);
  console.log('Data saved successfully to localStorage!');
};

export default saveToJson;
