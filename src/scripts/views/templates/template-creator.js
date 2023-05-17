import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoItemTemplate = (resto) => `
<div class="resto-item">
    <div class="resto-image">
      <img class="resto-item-img lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
    </div>
    <div class="resto-item-content">
    <p class="resto-item-rating">Rating: ${resto.rating} <i class="fa fa-star" style="color: orange" aria-hidden="true"></i></p>
    <h1 class="resto__name"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
    <p class="resto-item-lokasi">Lokasi: ${resto.city}</p>
    <p class="resto-item-description">${resto.description}</p>
    </div>
    </div>
`;

const createSkeletonItemTemplate = () => `
        <div class="skeleton-item">
            <div class="skeleton-image">
            </div>
            <div class="skeleton-item-content">
            <div class="skeleton-item-rating"></div>
            <div class="skeleton__name"></div>
            <div class="skeleton-item-lokasi"></div>
            <div class="skeleton-item-description"></p>
            </div>
        </div> `;
const createRestoDetailTemplate = (resto) => `
<div class="resto-detail-img">
   <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
</div>
<div class="resto-detail-content">
   <h1 class="resto__name__detail">${resto.name}</h1>
   <p class="resto-detail-lokasi">Lokasi: ${resto.city}</p>
   <p class="resto-detail-rating">Rating: ${resto.rating} <i class="fa fa-star" style="color: orange" aria-hidden="true"></i> </p>
   <p class="resto-detail-description">${resto.description}</p>
</div>

`;

const createRestoMenu = (resto) => {
  const { menus } = resto;
  const { foods, drinks } = menus;
  const foodsFormatted = foods.map((food) => `<dd>${food.name}</dd>`).join(' ');
  const drinksFormatted = drinks
    .map((drink) => `<dd>${drink.name}</dd>`)
    .join(' ');
  return `
   <div class="card makanan">
      <h3>Makanan</h3>
      <p>${foodsFormatted}</p>
   </div>
   <div class="card minuman">
      <h3>Minuman</h3>
      <p>${drinksFormatted}</p>
   </div>
   `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createRestoMenu,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonItemTemplate,
};
