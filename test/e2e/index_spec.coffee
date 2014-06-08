'use strict';

chai = require('chai');
chai.use(require('chai-as-promised'));

expect = chai.expect;

Index = require('./pages/index_page.coffee')

describe 'Index page', ->

  it 'has a link to encoding tool.'

  it 'has a link to message digest tool.'

  it 'has a link to crypt tool.'

  it 'can input convert target string and show converted string.', ->
    index = new Index()

    index.fill('convert target string')

    expect(index.converted().getText()).to.eventually.equal('convert target string')
