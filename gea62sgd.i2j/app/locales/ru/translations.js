import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Booking recreation',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Booking recreation',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Booking recreation',
          title: 'Booking recreation'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'booking-recreation': {
          caption: 'BookingRecreation',
          title: 'BookingRecreation',
          'i-i-s-booking-recreation-booking-l': {
            caption: 'Бронирование',
            title: ''
          },
          'i-i-s-booking-recreation-recreation-l': {
            caption: 'Базы отдыха',
            title: ''
          },
          'i-i-s-booking-recreation-application-user-l': {
            caption: 'Пользователи',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
