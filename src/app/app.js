import angular from 'angular';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';
import ngAnimate from 'angular-animate';

import AppComponent from './components/quiz.component';

angular.module('app', [
	ngAnimate,
  Components.name,
  services.name
])
.component('app', AppComponent);
angular.bootstrap(document.body, ['app']);
