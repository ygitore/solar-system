import '../styles/main.scss';
import planetData from './components/planetList/planetsList';
import pl from './helpers/data/planets';

const init = () => {
  planetData.createPlanetList(pl.getPlanets());
  planetData.showImageOrName();
  planetData.closePageButton();
  planetData.searchPlanet();
};
init();
