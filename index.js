const selenium = require('selenium-webdriver')
const By = selenium.By

const driver = new selenium.Builder()
  .forBrowser('chrome')
  .build()

driver.get('https://officeish.com/')

driver.findElement(By.css('#navbar .nav #listings:first-child'))
  .click()

function addLocation(location){
  driver.findElement(By.id('usearch'))
    .sendKeys(location)
  driver.findElement(By.css('.searchbtn button'))
    .click()
}

addLocation('20850')
