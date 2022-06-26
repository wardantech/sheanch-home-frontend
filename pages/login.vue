<template>
  <div>
    <section>
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="6">
            <div class="auth-content">
              <div class="auth-content-body">
                <h2 class="text-center">Login</h2>
                <br>
                <div class="login-form">
                  <b-form class="simple-form">
                    <b-form-group label="Email/Username">
                      <div class="input-with-icon">
                        <b-form-input type="text" v-model="form.email" placeholder="Email/Username"></b-form-input>
                        <b-icon icon="person"></b-icon>
                      </div>
                    </b-form-group>

                    <b-form-group label="Password">
                      <div class="input-with-icon">
                        <b-form-input type="password" v-model="form.password" placeholder="Password"></b-form-input>
                        <b-icon icon="unlock"></b-icon>
                      </div>
                    </b-form-group>

                    <b-form-group>
                      <b-row>
                        <b-col md="6">
                          <b-form-checkbox>
                            Remember Me
                          </b-form-checkbox>
                        </b-col>
                        <b-col md="6" class="text-md-center">
                          <b-link class="text-danger">Forgot Your Password?</b-link>
                        </b-col>
                      </b-row>
                    </b-form-group>

                    <b-form-group>
                      <b-button @click="userLogin" block class="btn btn-browse-more">Login</b-button>
                    </b-form-group>

                    <b-form-group class="text-center">
                      <p>
                        Don't have an account?
                        <nuxt-link
                          class="text-danger"
                          :to="{ name: 'auth-register'}">
                          Register a new account
                        </nuxt-link>
                      </p>
                    </b-form-group>

                    <div class="text-center">
                      <div class="auth-divider">
                        <span>Or login via</span>
                      </div>
                      <div class="social-button">
                        <b-button block class="btn social-button-login facebook">
                          Facebook
                        </b-button>
                      </div>
                    </div>
                  </b-form>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  auth: false,
  mounted() {
    console.log(this.$store.state.auth.user)
     console.log(this.$auth.loggedIn)
    if(this.$auth.loggedIn){
      this.$nuxt.$options.router.push({name: 'account-dashboard'})
    }
  },
  data() {
    return {
      loader: false,
      form: {
        email: 'admin@gmail.com',
        password: '123456',
      },
      errors: {}
    }
  },

  methods: {
    async userLogin() {
      this.loader = true;

      await this.$auth.loginWith('local', {data: this.form})
        .then(response => {
          //this.$toast.success('Logged In successfully!');
          console.log(response)
          //this.$nuxt.$loading.finish();
          //this.$store.dispatch('auth/storeAuthToken', response.data.data.token)
          //console.log(this.$store.getters['auth/getAuthToken']);
          //console.log(response);
          //console.log(this.$auth.user)
          this.$nuxt.$options.router.push({name: 'account-dashboard'})
          //console.log(this.$auth.user)
          //console.log(this.$auth.loggedIn)
        });


    },
  }
}
</script>

<style scoped>

</style>
