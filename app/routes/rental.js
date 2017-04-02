import Ember from 'ember';

export default Ember.Route.extend({
  model(params) { // params from router.js
    return this.store.findRecord('rental', params.rental_id);
  },
});
