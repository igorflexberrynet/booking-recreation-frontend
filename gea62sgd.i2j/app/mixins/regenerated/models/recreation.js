import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  phone: DS.attr('string'),
  address: DS.attr('string'),
  name: DS.attr('string'),
  employees: DS.hasMany('i-i-s-booking-recreation-recreation-employee', { inverse: 'recreation', async: false }),
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
  modelClass.defineProjection('RecreationE', 'recreation', {
    phone: Projection.attr('Phone', { index: 0 }),
    address: Projection.attr('Address', { index: 1 }),
    name: Projection.attr('Name', { index: 2 }),
    employees: Projection.hasMany('i-i-s-booking-recreation-recreation-employee', 'Employees', {
      recreationAdmin: Projection.attr('Recreation admin', { index: 0 }),
      user: Projection.belongsTo('application-user', 'User', {
        phone: Projection.attr('Phone', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'phone' })
    })
  });
  modelClass.defineProjection('RecreationL', 'recreation', {
    phone: Projection.attr('Phone', { index: 0 }),
    address: Projection.attr('Address', { index: 1 }),
    name: Projection.attr('Name', { index: 2 })
  });
};
