import ApiSource from '../../data/api-source';
import { createRestoItemTemplate, createSkeletonItemTemplate } from '../templates/template-creator';

const ExploreRestaurants = {
  async render() {
    return `
    <style>
    
    @media only screen and (max-width: 600px) {
      .hero {
        background-image: url("./images/hero-image_1-small.jpg");
      }
    }

    @media only screen and (min-width: 601px) {
      .hero {
        background-image: url("./images/hero-image_1-large.jpg");
      }
    }
    
    
      
    </style>
    <div class="hero">
         <div class="hero_inner">
            <h1 class="hero_title">Restaurant Finder</h1>
            <p class="hero_tagline">Sebuah website untuk mencari restaurant-restaurant terbaik di Indonesia </p>
         </div>
      </div>
      
    <section class="content">
            <div class="daftar-resto">
               <h1 class="label">Explore Restaurant</h1>
               <div class="restos" id="restos">
                  
               </div>
            </div>
            </div>
         </section>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#restos');
    [...Array(12).keys()].forEach(() => {
      restosContainer.innerHTML += createSkeletonItemTemplate();
    });
    const restos = await ApiSource.exploreRestaurant();
    restosContainer.innerHTML = '';
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default ExploreRestaurants;
