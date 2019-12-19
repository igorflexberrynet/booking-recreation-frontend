import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  dateStart: DS.attr('date'),
  dateEnd: DS.attr('date'),
  recreation: DS.belongsTo('recreation', { inverse: null, async: false }),
  client: DS.belongsTo('application-user', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      recreation: { presence: true },
      client: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookingE', 'booking', {
    dateStart: Projection.attr('Date start', { index: 0 }),
    dateEnd: Projection.attr('Date end', { index: 1 }),
    recreation: Projection.belongsTo('recreation', 'Recreation', {
      phone: Projection.attr('Phone', { index: 3 })
    }, { index: 2 }),
    client: Projection.belongsTo('application-user', 'Client', {
      phone: Projection.attr('Phone', { index: 5 })
    }, { index: 4 })
  });
  modelClass.defineProjection('BookingL', 'booking', {
    dateStart: Projection.attr('Date start', { index: 0 }),
    dateEnd: Projection.attr('Date end', { index: 1 }),
    recreation: Projection.belongsTo('recreation', 'Phone', {
      phone: Projection.attr('Phone', { index: 2 })
    }, { index: -1, hidden: true }),
    client: Projection.belongsTo('application-user', 'Phone', {
      phone: Projection.attr('Phone', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
