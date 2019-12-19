import { moduleForModel, test } from 'ember-qunit';

moduleForModel('booking', 'Unit | Serializer | booking', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:booking',
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
