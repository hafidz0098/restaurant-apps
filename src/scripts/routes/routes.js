import Detail from '../views/pages/detail';
import ExploreRestaurants from '../views/pages/explore-restaurants';
import Like from '../views/pages/like';

const routes = {
  '/': ExploreRestaurants,
  '/explore-restaurants': ExploreRestaurants, // default page
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
