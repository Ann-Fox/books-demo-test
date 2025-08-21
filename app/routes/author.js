import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { Promise } from "rsvp";
import { later } from "@ember/runloop";

export default Route.extend({
  dataService: service("data"),

  model() {
    return new Promise((resolve, reject) => {
      later(async () => {
        try {
          let authors = await this.get("dataService").getAuthors();
          resolve(authors);
        } catch (error) {
          reject("Connection failed");
        }
      }, 3000);
    });
  },
  // templateName: 'author-list', //принцип configuration - можно переопределить шаблон, если названия не совпадают (шаблон author-list.hbs)
});
