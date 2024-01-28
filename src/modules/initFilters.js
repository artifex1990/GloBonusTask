import { initMoviesFilter } from './initMoviesFilter';

// eslint-disable-next-line import/prefer-default-export
export const initFilters = async (cards, locale = 'en') => {
  initMoviesFilter(cards, locale);
};
