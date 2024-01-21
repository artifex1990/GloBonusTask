import generateCard from './modules/generateCard';
import getData from './modules/getdata';

const data = await getData('./data/dbHeroes.json');
const app = document.getElementById('app');
const cards = document.createElement('div');

cards.classList.add('cards');

data.forEach((element) => {
  cards.append(generateCard(element));
  cards.appendChild(document.createElement('br'));
});

app.append(cards);
