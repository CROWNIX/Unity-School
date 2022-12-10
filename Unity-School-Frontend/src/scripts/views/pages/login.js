import SchoolApiResource from '../../data/schoolApiResource';

const login = {
  async render() {
    return `
    <div class="content">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <img src="./images/logo/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3 class="mb-3">Sign In</h3>
            </div>
            <form action="" method="post" id="formLogin">
              <div class="form-group first mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Masukan email" required>
              </div>
              <div class="form-group last mb-4">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Masukan password" required>   
              </div>

              <input type="submit" value="Log In" class="btn btn-block btn-primary">

              <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
              
              <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>
              </div>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
      `;
  },

  async afterRender() {
    try {
      const formLogin = document.querySelector('#formLogin');
      const email = document.querySelector('#email');
      const password = document.querySelector('#password');

      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();

        const loginInfo = await SchoolApiResource.login(email.value, password.value);
        console.log(loginInfo);
      });
    } catch (error) {
      console.log('error');
    }
  },
};

export default login;
