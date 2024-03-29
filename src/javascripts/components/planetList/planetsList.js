import './planetsList.scss';
import $ from 'jquery';
import utils from '../../helpers/utilities';
import planet from '../../helpers/data/planets';

const createPlanetList = (pl) => {
  // const pl = planet.getPlanets();
  let domString = '<div class="row planets-row">';
  for (let i = 0; i < pl.length; i += 1) {
    domString += `<div class = "col-4 planet-card-column">
                    <div class="card planet-card" id="${pl[i].name}">
                      <img src = "${pl[i].imageUrl}" class="card-img-top planet-image" alt="${pl[i].name}">
                      <h4 class="planet-name">${pl[i].name}</h4>
                    </div>
                  </div>`;
  }
  domString += '</div>';
  utils.printToDom('planetsConstainer', domString);
  $('.planet-image').hide();
};


const singlePlanetDisplay = (e) => {
  const selectedId = $(e.target).closest('.planet-card')[0].id;
  // .closest('.planet-card') ==> go up to find the parent that matches the conditions.
  const planets = planet.getPlanets();
  let clickedPlanet = '';
  for (let i = 0; i < planets.length; i += 1) {
    if (planets[i].name === selectedId) {
      clickedPlanet = planets[i];
    }
  }
  const singlePlanetdomString = ` <div id = "closeSinglePlanetPageDiv" class="closePage"><button id = "closeSinglePlanetPage">X</button></div>
                                  <div class="single-planet-image-description"><div id="single-planet-image"><img src = "${clickedPlanet.imageUrl}"></div>
                                    <div id="single-planet-description">${clickedPlanet.description}</div>
                                  </div>`;
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
    $('body').on('click', '.planet-card', (e) => {
      const selectedPlanet = singlePlanetDisplay(e);
      utils.printToDom('single-planet', selectedPlanet);
      utils.printToDom('planetsConstainer', '');
      $('#search').html('');
    });
  });
};
const closePageButton = () => {
  $('body').on('click', '#closeSinglePlanetPage', () => {
    createPlanetList(planet.getPlanets());
    utils.printToDom('single-planet', '');
    $('#single-planet').html('');
    $('#search').html('<input type="search" class="input-field-for-search" placeholder="search...">');
  });
};
const searchPlanet = () => {
  $('#search').on('keyup', () => {
    const mySearch = $('#my-planet-search').val().toLowerCase();
    const pli = planet.getPlanets();
    const myPl = [];
    pli.forEach((x) => {
      if (x.name.toLowerCase().indexOf(mySearch) > -1 || x.description.toLocaleLowerCase().includes(mySearch)) {
        myPl.push(x);
      }
    });
    createPlanetList(myPl);
  });
};
export default {
  createPlanetList, showImageOrName, closePageButton, searchPlanet,
};
