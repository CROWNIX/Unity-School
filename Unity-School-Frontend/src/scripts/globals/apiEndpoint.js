import CONFIG from './config';

const API_ENDPOINT = {
  getALlSchools: `${CONFIG.BASE_URL}/schools`,
  getSchoolById: (id) => `${CONFIG.BASE_URL}/schools/${id}`,
  searchSchools: (keyword) => `${CONFIG.BASE_URL}/schools/?search=${keyword}`,
  createComment: `${CONFIG.BASE_URL}/comments`,
  login: `${CONFIG.BASE_URL}/auth/login`,
};

export default API_ENDPOINT;
