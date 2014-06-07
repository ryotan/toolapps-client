class IndexPage

  constructor: ->
    @target = element(By.model('target'))
    browser.get('/')

  fill: (str) ->
    element(By.id('target')).sendKeys(str)
    return @

  converted: ->
    element(By.binding('converted'))

module.exports = IndexPage
