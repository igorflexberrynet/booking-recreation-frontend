import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  recreationAdmin: DS.attr('boolean', { defaultValue: false }),
  user: DS.belongsTo('application-user', { inverse: null, async: false }),
  recreation: DS.belongsTo('recreation', { inverse: 'employees', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      user: { presence: true },
      recreation: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export function defineNamespace(modelClass) {
  modelClass.reopenClass({
    namespace: 'IIS.BookingRecreation',
  });
}

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RecreationEmployeeE', 'i-i-s-booking-recreation-recreation-employee', {
    recreationAdmin: Projection.attr('Recreation admin', { index: 0 }),
    user: Projection.belongsTo('application-user', 'User', {
      phone: Projection.attr('Phone', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'phone' })
  });
};
