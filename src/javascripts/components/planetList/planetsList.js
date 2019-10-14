import './planetsList.scss';
import $ from 'jquery';
import utils from '../../helpers/utilities';
import planet from '../../helpers/data/planets';

const createPlanetList = () => {
  const pl = planet.getPlanets();
  let domString = '<div class="row planets-row">';
  for (let i = 0; i < pl.length; i += 1) {
    domString += `<div class = "col-4 planet-card" id="planetCard-${i}">
                    <div class="card p-card">
                      <img id="planet-image-${i}" class = "planet-image" src = "${pl[i].imageUrl}" class="card-img-top planet-picture" alt="${pl[i].name}" id = "planet-${i}">
                      <div class="card-body">
                          <h4 id ="planet-name-${i}" class="planet-name">${pl[i].name}</h4>
                      </div>
                      <div class = 'description' id="description-${i}">${pl[i].description}</div>
                    </div>
                  </div>`;
  }
  domString += '</div>';
  utils.printToDom('planetsConstainer', domString);
};
const showHide = () => {
  $(document).ready(() => {
    $('body').on('click', '.planet-card', () => {
      $('.planet-image').toggle();
    });
  });
};
export default { createPlanetList, showHide };
