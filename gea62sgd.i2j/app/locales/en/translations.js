import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBookingRecreationApplicationUserLForm from './forms/i-i-s-booking-recreation-application-user-l';
import IISBookingRecreationBookingLForm from './forms/i-i-s-booking-recreation-booking-l';
import IISBookingRecreationRecreationLForm from './forms/i-i-s-booking-recreation-recreation-l';
import IISBookingRecreationApplicationUserEForm from './forms/i-i-s-booking-recreation-application-user-e';
import IISBookingRecreationBookingEForm from './forms/i-i-s-booking-recreation-booking-e';
import IISBookingRecreationRecreationEForm from './forms/i-i-s-booking-recreation-recreation-e';
import ApplicationUserModel from './models/application-user';
import BookingModel from './models/booking';
import IISBookingRecreationRecreationEmployeeModel from './models/i-i-s-booking-recreation-recreation-employee';
import RecreationModel from './models/recreation';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'application-user': ApplicationUserModel,
    'booking': BookingModel,
    'i-i-s-booking-recreation-recreation-employee': IISBookingRecreationRecreationEmployeeModel,
    'recreation': RecreationModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'booking-recreation': {
          caption: 'booking-recreation',
          title: 'booking-recreation',
          'i-i-s-booking-recreation-booking-l': {
            caption: 'i-i-s-booking-recreation-booking-l',
            title: 'i-i-s-booking-recreation-booking-l'
          },
          'i-i-s-booking-recreation-recreation-l': {
            caption: 'i-i-s-booking-recreation-recreation-l',
            title: 'i-i-s-booking-recreation-recreation-l'
          },
          'i-i-s-booking-recreation-application-user-l': {
            caption: 'i-i-s-booking-recreation-application-user-l',
            title: 'i-i-s-booking-recreation-application-user-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-booking-recreation-application-user-l': IISBookingRecreationApplicationUserLForm,
    'i-i-s-booking-recreation-booking-l': IISBookingRecreationBookingLForm,
    'i-i-s-booking-recreation-recreation-l': IISBookingRecreationRecreationLForm,
    'i-i-s-booking-recreation-application-user-e': IISBookingRecreationApplicationUserEForm,
    'i-i-s-booking-recreation-booking-e': IISBookingRecreationBookingEForm,
    'i-i-s-booking-recreation-recreation-e': IISBookingRecreationRecreationEForm,
  },

});

export default translations;
