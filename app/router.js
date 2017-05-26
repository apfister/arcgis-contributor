import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signin');
  this.route('unauthorized');

  // this.route('groups', function() {
  //   this.route('group');
  //   this.route('index-loading');
  // });

  this.authenticatedRoute('groups', {path: '/'},  function () {
    this.route('group', { path: '/:id' }, function () {
      this.route('details', { path: '/' });
    });
  });

  this.route('groups', function() {
    this.route('index-loading');
  });
  // this.route('review', function() {});
});

export default Router;
