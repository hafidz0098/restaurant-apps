import API_ENDPOINT from '../globals/api-endpoint';

class ApiSource {
  static async exploreRestaurant() {
    const response = await fetch(API_ENDPOINT.EXPLORE_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default ApiSource;
