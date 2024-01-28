import { getData } from './helper';

// eslint-disable-next-line import/prefer-default-export
export class CardService {
  // eslint-disable-next-line class-methods-use-this
  getCards() {
    return getData('http://localhost:4545/heroes').then((cards) => cards);
  }

  // eslint-disable-next-line class-methods-use-this
  getFilterCards(name, value) {
    return getData(`http://localhost:4545/heroes?${name}_like=${value}`).then((cards) => cards);
  }
}
