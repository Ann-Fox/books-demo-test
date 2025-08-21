import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { Promise } from "rsvp";
import { later } from "@ember/runloop";

export default Route.extend({
  dataService: service("data"),

  model() {
    return new Promise((resolve) => {
      later(async () => {
        let authors = await this.get("dataService").getAuthors();
        resolve(authors);
      }, 3000);
    });
  },
  // templateName: 'author-list', //принцип configuration - можно переопределить шаблон, если названия не совпадают (шаблон author-list.hbs)
});
