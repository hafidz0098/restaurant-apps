import UrlParser from '../../routes/url-parser';
import ApiSource from '../../data/api-source';
import { createRestoDetailTemplate, createRestoMenu } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="resto-detail" class="resto-detail">
    </div>
    <h1 class="title">Menu</h1>
    <div id="resto-menu" class="resto-menu">
    </div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await ApiSource.detailRestaurant(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('#resto-detail');
    const restoMenu = document.querySelector('#resto-menu');
    restoMenu.innerHTML = createRestoMenu(resto);
    // restoMenu.appendChild = restoContainer;
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.id,
        city: resto.city,
        pictureId: resto.pictureId,
        rating: resto.rating,
        name: resto.name,
        description: resto.description,
      },
    });
  },
};

export default Detail;
