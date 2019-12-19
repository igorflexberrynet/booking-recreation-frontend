import { Model as BookingMixin, defineProjections } from
  '../mixins/regenerated/models/booking';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, BookingMixin, {

});

defineProjections(Model);
export default Model;
