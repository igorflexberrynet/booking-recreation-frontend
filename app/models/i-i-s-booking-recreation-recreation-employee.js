import { Model as RecreationEmployeeMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-booking-recreation-recreation-employee';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, RecreationEmployeeMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
