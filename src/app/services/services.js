import angular from 'angular';

import productsList from './productsList';
import GetJson from './GetJson';

export default angular
  .module('app.services', [])
  .service({ productsList })
  .service({ GetJson });
