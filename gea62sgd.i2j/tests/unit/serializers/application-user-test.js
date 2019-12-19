import { moduleForModel, test } from 'ember-qunit';

moduleForModel('application-user', 'Unit | Serializer | application-user', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:application-user',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:application-user',
    'model:booking',
    'model:i-i-s-booking-recreation-recreation-employee',
    'model:recreation'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
