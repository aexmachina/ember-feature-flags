import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';
import {resetFeatureFlags} from 'ember-feature-flags/tests/helpers/reset-feature-flags';

export default function startApp(attrs) {
  var application;

  resetFeatureFlags();

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
