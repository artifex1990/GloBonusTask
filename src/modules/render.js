import { locales, generateTags } from './helper';

// eslint-disable-next-line import/prefer-default-export
export const render = (cards, locale = 'en') => {
  const cardList = document.getElementById('card-list');
  cardList.innerHTML = '';

  const createCard = (card) => {
    const type = 'card';
    const cardBlock = generateTags('div');
    const table = generateTags('table');
    const className = `card${new Date().getTime()}`;

    cardBlock.classList.add(className);
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in card) {
      const tr = generateTags('tr');
      const tdName = generateTags('td');
      const tdValue = generateTags('td');

      tdName.innerText = `${locales(type, locale)[key]}: `;

      if (key === 'photo') {
        const img = generateTags('img');
        img.setAttribute('src', `./data/${card[key]}`);
        // eslint-disable-next-line no-param-reassign
        tdValue.append(img);
      } else {
        tdValue.innerText = card[key];
      }

      tr.append(tdName);
      tr.append(tdValue);
      table.append(tr);
    }
    cardBlock.append(table);

    return cardBlock;
  };

  try {
    cards.then((data) => {
      data.forEach((card) => {
        cardList.append(createCard(card));
        cardList.append(document.createElement('br'));
      });
      cardList.append(cards);
    });
  } catch (error) {
    console.log(error.message);
  }
};
