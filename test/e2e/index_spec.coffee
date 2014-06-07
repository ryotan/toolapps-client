'use strict';

Index = require('./pages/index_page.coffee')

describe('Index page', ->

  it('can input convert target string and show converted string.', ->
    index = new Index()

    index.fill('convert target string')

    expect(index.converted().getText()).toEqual('convert target string')
  )
)
