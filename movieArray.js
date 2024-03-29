const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const filteredMovies = movies.filter(movie => movie.year === 2018 && movie.rating >= 4);
const sortedMovies = filteredMovies.sort((a, b) => b.rating - a.rating);
const movieTitles = sortedMovies.map(movie => movie.title);
console.log(movieTitles);

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
console.log(titles);
