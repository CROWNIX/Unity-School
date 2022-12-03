import API_ENDPOINT from '../globals/apiEndpoint';

class SchoolApiResource {
  static async getALlSchools() {
    try {
      const response = await fetch(API_ENDPOINT.getALlSchools);
      const { schools } = await response.json();
      return schools;
    } catch (error) {
      return error;
    }
  }

  static async getSchoolById(id) {
    try {
      const response = await fetch(API_ENDPOINT.getSchoolById(id));
      const { school } = await response.json();
      return school;
    } catch ({message}) {
      return message;
    }
  }
}

export default SchoolApiResource;
