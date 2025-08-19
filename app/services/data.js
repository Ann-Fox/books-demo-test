import Service from '@ember/service';

export default Service.extend({
  getAuthors(){
    return fetch("http://127.0.0.1:3000/authors").then(response => response.json());
  }

});
