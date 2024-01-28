export const locales = (typeObject, locale = 'en') => {
  const defaultLocale = 'en';
  // eslint-disable-next-line no-underscore-dangle
  const _locales = {
    en: {
      card: {
        name: 'Name',
        realName: 'Real name',
        citizenship: 'Citizenship',
        species: 'Species',
        gender: 'Gender',
        birthDay: 'Birth day',
        deathDay: 'Death day',
        status: 'Status',
        actors: 'Actors',
        photo: 'Photo',
        movies: 'Movies',
      },
      filters: {
        movie: 'Movie',
      },
    },
    ru: {
      card: {
        name: 'Имя',
        realName: 'Настоящее имя',
        citizenship: 'Гражданство',
        species: 'Вид',
        gender: 'Пол',
        birthDay: 'День рождения',
        deathDay: 'День смерти',
        status: 'Статус',
        actors: 'Актёр',
        photo: 'Фотография',
        movies: 'Фильмы',
      },
      filters: {
        movie: 'Фильм',
      },
    },
  };

  if (Object.keys(_locales[locale][typeObject]).length) {
    return _locales[locale][typeObject];
  }

  return _locales[defaultLocale][typeObject];
};

export const generateTags = (typeTag, innerText = '') => {
  // eslint-disable-next-line no-shadow
  const getTag = (typeTag) => document.createElement(typeTag);
  const tag = getTag(typeTag);
  tag.innerText = innerText;

  return tag;
};

// eslint-disable-next-line arrow-body-style
export const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
};

// eslint-disable-next-line no-shadow
export const merge = (a, b, condition = (a, b) => a === b) => {
  const temp = [...a];

  // eslint-disable-next-line max-len
  b.forEach((bItem) => (temp.some((tempItem) => condition(bItem, tempItem)) ? null : temp.push(bItem)));

  return temp;
};
