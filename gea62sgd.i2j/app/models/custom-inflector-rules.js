import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('recreation', 'Recreations');
inflector.irregular('employee', 'Employees');
inflector.irregular('booking', 'Bookings');
inflector.irregular('user', 'Users');

export default {};
