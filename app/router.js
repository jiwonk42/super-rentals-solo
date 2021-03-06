import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about'); // 'about' route, handlebar, test file created
  this.route('contact'); // 'contact' route, handlebar, test file created
  this.route('rental', {path: '/rental/:rental_id'}); // 'rental' route that displays a SINGLE rental instead of all rentals
});

export default Router;
