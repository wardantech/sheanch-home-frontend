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
                          <b-form-input type="text" placeholder="Email/Username"></b-form-input>
                          <b-icon icon="person"></b-icon>
                        </div>
                      </b-form-group>

                      <b-form-group label="Password">
                        <div class="input-with-icon">
                          <b-form-input type="password" placeholder="Password"></b-form-input>
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
                        <b-button block class="btn btn-browse-more">Login</b-button>
                      </b-form-group>

                      <b-form-group class="text-center">
                        <p>
                          Don't have an account?
                          <b-link class="text-danger">Register a new account</b-link>
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
        name: "login"
    }
</script>

<style scoped>

</style>
