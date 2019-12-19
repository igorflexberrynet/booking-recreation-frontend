import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-booking-recreation-recreation-employee', 'Unit | Model | i-i-s-booking-recreation-recreation-employee', {
  // Specify the other units that are required for this test.
  needs: [
    'model:application-user',
    'model:booking',
    'model:i-i-s-booking-recreation-recreation-employee',
    'model:recreation'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
