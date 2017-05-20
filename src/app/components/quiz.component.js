import template from './mainFile.html';
import controller from './controller';
import styles from './style.less'

let quizComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'c'
};

export default quizComponent;
