const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;

const dom = new JSDOM('<html></html>');
const window = dom.window;
const document = window.document;

global.chai = require('chai');
global.sinon = require('sinon');
global.should = require('chai').should();

const chaiImmutable = require('chai-immutable');

global.chai.use(chaiImmutable);
global.window = window;
global.document = document;

/** Ignore CSS and Image files */
const noop = () => {};

require.extensions['.css'] = noop;
require.extensions['.ico'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;