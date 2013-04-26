App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

module("/conversations", {
  setup: function() {
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    App.reset();
  }
});

test("Application renders", function() {
  debugger;
  
  visit("/").then(function() {
    equal(find("h2").text(), "Welcome to Ember.js", "Application header is rendered");
    equal(find("li").length, 3, "There are three items in the list");
  });
});