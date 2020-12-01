import EmberRouter from '@ember/routing/router';
import config from 'emily-pcos/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('schedule', { path:'/work-with-me' });
  this.route('testimonials');
  this.route('contact');
});
