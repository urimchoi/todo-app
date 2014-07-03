Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.Router.map(function () {
  this.resource('todos', { path: '/' });
});



