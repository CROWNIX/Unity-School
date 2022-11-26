import UrlParser from '../routes/urlParser';
import web from '../routes/web';

class App {
  constructor(content) {
    console.log(content);
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const page = web[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
