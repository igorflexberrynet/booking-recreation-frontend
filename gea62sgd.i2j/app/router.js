import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-booking-recreation-application-user-l');
  this.route('i-i-s-booking-recreation-application-user-e',
  { path: 'i-i-s-booking-recreation-application-user-e/:id' });
  this.route('i-i-s-booking-recreation-application-user-e.new',
  { path: 'i-i-s-booking-recreation-application-user-e/new' });
  this.route('i-i-s-booking-recreation-booking-l');
  this.route('i-i-s-booking-recreation-booking-e',
  { path: 'i-i-s-booking-recreation-booking-e/:id' });
  this.route('i-i-s-booking-recreation-booking-e.new',
  { path: 'i-i-s-booking-recreation-booking-e/new' });
  this.route('i-i-s-booking-recreation-recreation-l');
  this.route('i-i-s-booking-recreation-recreation-e',
  { path: 'i-i-s-booking-recreation-recreation-e/:id' });
  this.route('i-i-s-booking-recreation-recreation-e.new',
  { path: 'i-i-s-booking-recreation-recreation-e/new' });
});

export default Router;
