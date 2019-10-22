import './planetsList.scss';
import $ from 'jquery';
import utils from '../../helpers/utilities';
import planet from '../../helpers/data/planets';

const createPlanetList = () => {
  const pl = planet.getPlanets();
  let domString = '<div class="row planets-row">';
  for (let i = 0; i < pl.length; i += 1) {
    domString += `<div class = "col-4 planet-card-column">
                    <div class="card planet-card">
                      <img src = "${pl[i].imageUrl}" class="card-img-top planet-image" alt="${pl[i].name}">
                      <h4 class="planet-name">${pl[i].name}</h4>
                    </div>
                  </div>`;
  }
  domString += '</div>';
  utils.printToDom('planetsConstainer', domString);
  $('.planet-image').hide();
};
const singlePlanetDisplay = () => {
  let singlePlanetdomString = '<div id = "closeSinglePlanetPageDiv" class="closePage"><button id = "closeSinglePlanetPage">X</button></div>';
  singlePlanetdomString += '<div id="single-planet-image"></div>';
  singlePlanetdomString += '<div id="single-planet-description"></div>';
  return singlePlanetdomString;
};

const showImageOrName = () => {
  $('document').ready(() => {
    $('body').on('mouseenter', '.planet-card', (e) => {
      $(e.target).find('.planet-name').hide();
      $(e.target).find('.planet-image').show();
    });
    $('body').on('mouseleave', '.planet-card', (e) => {
      $(e.target).find('.planet-image').hide();
      $(e.target).find('.planet-name').show();
    });
    $('body').on('click', '.planet-card', () => {
      utils.printToDom('single-planet', singlePlanetDisplay);
      utils.printToDom('planetsConstainer', '');
    });
  });
};
const closePageButton = () => {
  $('body').on('click', '#closeSinglePlanetPage', () => {
    createPlanetList();
    utils.printToDom('single-planet', '');
    $('#single-planet').html('');
  });
};

export default { createPlanetList, showImageOrName, closePageButton };
