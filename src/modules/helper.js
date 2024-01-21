const locales = (typeObject, locale = 'en') => {
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
    },
  };

  if (_locales[locale].length) {
    return _locales[locale][typeObject];
  }

  return _locales[defaultLocale][typeObject];
};

const generateTags = (typeTag, innerText = '') => {
  // eslint-disable-next-line no-shadow
  const getTag = (typeTag) => document.createElement(typeTag);
  const tag = getTag(typeTag);
  tag.innerText = innerText;

  return tag;
};

// eslint-disable-next-line import/prefer-default-export
export { locales, generateTags };
