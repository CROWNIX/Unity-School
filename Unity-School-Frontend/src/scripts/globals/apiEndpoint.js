import CONFIG from './config';

const API_ENDPOINT = {
  getALlSchools: `${CONFIG.BASE_URL}/schools`,
  getSchoolById: (id) => `${CONFIG.BASE_URL}/schools/${id}`,
};

export default API_ENDPOINT;
