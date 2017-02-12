global.chai = require('chai');
global.sinon = require('sinon');
global.should = require('chai').should();

const chaiImmutable = require('chai-immutable');

global.chai.use(chaiImmutable);

const jsdom = require('jsdom').jsdom;
const document = jsdom( '<html/>' );
const window = document.defaultView;

global.window = window;
global.document = document;

/** Ignore CSS and Image files */
const noop = () => {};

require.extensions['.css'] = noop;
require.extensions['.ico'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;