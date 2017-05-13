import template from './mainFile.html';
import controller from './controller';

let quizComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'c'
};

export default quizComponent;
