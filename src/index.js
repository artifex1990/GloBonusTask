import { CardService } from './modules/cardService';
import { initFilters } from './modules/initFilters';
import { render } from './modules/render';

window.cardService = new CardService();

// eslint-disable-next-line no-undef
const cards = cardService.getCards();

render(cards);
initFilters(cards);
