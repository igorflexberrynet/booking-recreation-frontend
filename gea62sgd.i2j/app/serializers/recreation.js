import { Serializer as RecreationSerializer } from
  '../mixins/regenerated/serializers/recreation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RecreationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
