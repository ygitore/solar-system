import '../styles/main.scss';
import planetData from './components/planetList/planetsList';

const init = () => {
  planetData.createPlanetList();
  planetData.showImageOrName();
  planetData.closePageButton();
};
init();
