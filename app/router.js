import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("author");
  this.route("404", { path: "*path" }); //переход на страницу 404, все пути, которые явно не указаны в route
});

export default Router;
