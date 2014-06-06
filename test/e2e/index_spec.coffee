'use strict';

Index = require('./pages/index_page.coffee')

describe('Index page', ->

  index = new Index()

  it('can input convert target string and show converted string.', ->
    index.get()
    index.fill('convert target string')

    expect(index.converted().getText()).toEqual('convert target string')
    expect(index.converted().evaluate('raw')).toEqual('')
  )
)
