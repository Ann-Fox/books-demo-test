import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model(){
    return this.get('dataService').getAuthors();
  },
  // templateName: 'author-list', //принцип configuration - можно переопределить шаблон, если названия не совпадают (шаблон author-list.hbs)
});
