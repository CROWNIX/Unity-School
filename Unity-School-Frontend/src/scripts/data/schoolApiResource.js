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
    } catch ({ message }) {
      return message;
    }
  }

  static async searchSchools(keyword) {
    try {
      const response = await fetch(API_ENDPOINT.searchSchools(keyword));
      const { schools } = await response.json();
      return schools;
    } catch ({ message }) {
      return message;
    }
  }

  static async createComment(review) {
    try {
      await fetch(API_ENDPOINT.createComment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      return true;
    } catch ({ message }) {
      return message;
    }
  }

  static async login(email, password) {
    try {
      const test = await fetch(API_ENDPOINT.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      return test;
    } catch (error) {
      console.log('error');
      return error;
    }
  }
}

export default SchoolApiResource;
