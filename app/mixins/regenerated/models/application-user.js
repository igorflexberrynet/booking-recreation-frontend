import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  phone: DS.attr('string'),
  email: DS.attr('string'),
  isAdmin: DS.attr('boolean', { defaultValue: false }),
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ApplicationUserE', 'application-user', {
    phone: Projection.attr('Phone', { index: 0 }),
    email: Projection.attr('Email', { index: 1 }),
    isAdmin: Projection.attr('Is admin', { index: 2 }),
    name: Projection.attr('Name', { index: 3 })
  });
  modelClass.defineProjection('ApplicationUserL', 'application-user', {
    phone: Projection.attr('Phone', { index: 0 }),
    email: Projection.attr('Email', { index: 1 }),
    isAdmin: Projection.attr('Is admin', { index: 2 }),
    name: Projection.attr('Name', { index: 3 })
  });
};
