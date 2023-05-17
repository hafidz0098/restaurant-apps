import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
            <div class="daftar-resto" style="margin-top: 100px">
               <div class="restos" id="restos">
                  
               </div>
            </div>
            </div>
         </section>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restos');

    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Like;
