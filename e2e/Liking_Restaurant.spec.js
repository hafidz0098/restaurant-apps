/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('');
  I.wait(10);
  I.seeElement('.resto__name a');
  const firstResto = locate('.resto__name a').first();
  const restaurantName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.wait(10);
  I.seeElement('.resto-item');
  const likedRestaurantName = await I.grabTextFrom('.resto__name');
  assert.strictEqual(restaurantName, likedRestaurantName);
});

Scenario('cancel liking a restaurant', ({ I }) => {
  I.amOnPage('');
  I.wait(10);
  I.seeElement('.resto__name a');

  const firstRestaurant = locate('.resto__name a').first();
  I.click(firstRestaurant);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(10);
  I.seeElement('.resto-item');
  I.click(firstRestaurant);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(5);
  I.dontSeeElement('.resto-item');
});
