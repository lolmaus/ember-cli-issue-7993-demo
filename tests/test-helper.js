import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import QUnit from 'qunit';

setApplication(Application.create(config.APP));

QUnit.done(() => console.log("~!@#$] If you see this in terminal or CI, then the issue does not happen. [$#@!~")); // eslint-disable-line no-console

start();
