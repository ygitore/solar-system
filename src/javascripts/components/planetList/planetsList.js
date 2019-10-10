import utils from '../../helpers/utilities';
import './planetsList.scss';
import planet from '../../helpers/data/planets';

const createPlanetList = () => {
  const pl = planet.getPlanets();
  let domString = '<div class="row planets-row">';
  for (let i = 0; i < pl.length; i += 1) {
    domString += `<div class = "col-4 planet-card">
                    <div class="card p-card"style="width: 18rem;">
                      <img src = "${pl[i].imageUrl}" class="card-img-top planet-picture" alt="${pl[i].name}" id = "planet-${i}">
                      <div class="card-body">
                          <h4 class="planet-name">${pl[i].name}</h4>
                      </div>
                    </div>
                  </div>`;
  }
  domString += '</div>';
  utils.printToDom('planetsConstainer', domString);
};
export default { createPlanetList };
