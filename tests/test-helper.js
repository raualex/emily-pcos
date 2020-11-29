import Application from 'emily-pcos/app';
import config from 'emily-pcos/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
