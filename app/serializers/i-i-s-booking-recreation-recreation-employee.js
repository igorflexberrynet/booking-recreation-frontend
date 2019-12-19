import { Serializer as RecreationEmployeeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-booking-recreation-recreation-employee';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RecreationEmployeeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
