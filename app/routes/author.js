import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      {firstName: "C.S.", lastName: "Lewis"},
      {firstName: "Lev", lastName: "Tolstoy"}
    ];
  }
});
