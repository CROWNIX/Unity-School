import CONFIG from './config';

const API_ENDPOINT = {
  getALlSchools: `${CONFIG.BASE_URL}/schools`,
  getSchoolById: (id) => `${CONFIG.BASE_URL}/schools/${id}`,
  createComment: `${CONFIG.BASE_URL}/comments`,
};

export default API_ENDPOINT;
