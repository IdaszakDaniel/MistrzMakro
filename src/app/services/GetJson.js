export default class GetJson {
  constructor($http) {
  	this._$http = $http;
  }

  getData() {
    let request = {
      url: 'answers.JSON',
      method: 'GET',
    };
    return this._$http(request).then((res) => res.data);
  }
}

