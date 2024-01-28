import { merge } from './helper';
import { render } from './render';

// eslint-disable-next-line import/prefer-default-export
export const initMoviesFilter = async (cards) => {
  const filterMoviesSelect = document.getElementById('filter-movies');
  let movies = [];

  const getMoviesList = async () => {
    // eslint-disable-next-line no-undef
    await cards.then((data) => {
      data.forEach((hero) => {
        const heroMovies = typeof hero.movies !== 'undefined' ? hero.movies : [];
        movies = merge(movies, heroMovies);
      });
    });
  };

  const createMoviesList = () => {
    movies.forEach((movie) => {
      const option = document.createElement('option');

      // eslint-disable-next-line no-multi-assign
      option.value = option.textContent = movie;
      filterMoviesSelect.appendChild(option);
    });
  };

  filterMoviesSelect.addEventListener('change', (e) => {
    e.preventDefault();
    const movieName = e.target.value;

    // eslint-disable-next-line no-undef
    render(cardService.getFilterCards('movies', movieName));
  });

  await getMoviesList();
  createMoviesList();
};
