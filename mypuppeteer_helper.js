
'use strict';

class MyPuppeteer extends Helper {

  async renderPageToPdf() {
    const page = this.helpers['Puppeteer'].page;
    await page.emulateMedia('screen');
    return page.pdf({path: 'page.pdf'});    
  }
}

module.exports = MyPuppeteer;
