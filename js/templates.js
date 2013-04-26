Ember.TEMPLATES.application = Ember.Handlebars.compile(
  "<h2>Welcome to Ember.js</h2>" +
  "{{outlet}}"
);

Ember.TEMPLATES.index = Ember.Handlebars.compile(
  "<ul>" +
  "{{#each item in model}}" +
  "  <li>{{item}}</li>" +
  "{{/each}}" +
  "</ul>"
);