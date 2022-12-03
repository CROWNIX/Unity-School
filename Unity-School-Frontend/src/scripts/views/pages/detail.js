import SchoolApiResource from '../../data/schoolApiResource';
import UrlParser from '../../routes/urlParser';

const detail = {
  async render() {
    return `
          <h1>Detail</h1>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const school = await SchoolApiResource.getSchoolById(url.id);
    console.log(school);
  },
};

export default detail;
