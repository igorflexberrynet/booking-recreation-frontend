import { Model as RecreationMixin, defineProjections } from
  '../mixins/regenerated/models/recreation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, RecreationMixin, {

});

defineProjections(Model);
export default Model;
