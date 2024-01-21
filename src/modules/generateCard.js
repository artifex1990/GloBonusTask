import { locales, generateTags } from './helper';

const generateCard = (card) => {
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
    tdName.innerText = `${locales(type)[key]}: `;
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

export default generateCard;
