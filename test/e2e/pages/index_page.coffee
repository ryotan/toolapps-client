class IndexPage

  constructor: ->
    @target = element(By.model('target'))

  get: ->
    browser.get('/')
    browser.waitForAngular()
    return @

  fill: (str) ->
    element(By.id('target')).sendKeys(str)

  converted: ->
    element(By.binding('converted'))

module.exports = IndexPage
