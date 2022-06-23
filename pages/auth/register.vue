<template>
    <div>
      <section>
        <b-container>
          <b-row class="justify-content-center">
            <b-col md="9">
              <div class="auth-content">
                <div class="auth-content-body">
                  <h2 class="text-center">Register</h2>
                  <br>
                  <div class="login-form">
                    <b-form class="simple-form">

                      <b-row>
                        <b-col sm="12" md="6">
                          <b-form-group>
                            <div class="input-with-icon">
                              <b-form-input type="text" placeholder="First name"></b-form-input>
                              <b-icon icon="person"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>

                        <b-col sm="12" md="6">
                          <b-form-group>
                            <div class="input-with-icon">
                              <b-form-input type="text" placeholder="Last name"></b-form-input>
                              <b-icon icon="person"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col sm="12" md="6">
                          <b-form-group>
                            <div class="input-with-icon">
                              <b-form-input type="email" placeholder="Email"></b-form-input>
                              <font-awesome-icon icon="fa-solid fa-envelope" />
                            </div>
                          </b-form-group>
                        </b-col>

                        <b-col sm="12" md="6">
                          <b-form-group>
                            <div class="input-with-icon">
                              <b-form-input type="text" placeholder="Username"></b-form-input>
                              <b-icon icon="person"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col md="6" sm="12">
                          <b-form-group label="Password">
                            <div class="input-with-icon">
                              <b-form-input type="password" placeholder="Password"></b-form-input>
                              <b-icon icon="unlock"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>

                        <b-col md="6" sm="12">
                          <b-form-group label="Password">
                            <div class="input-with-icon">
                              <b-form-input type="password" placeholder="Confirm Password"></b-form-input>
                              <b-icon icon="unlock"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>


                      <b-form-group>
                        <b-button block class="btn btn-browse-more">Register</b-button>
                      </b-form-group>

                      <b-form-group class="text-center">
                        <p>
                          Have an account already?
                          <nuxt-link
                            class="text-danger"
                            :to="{ name: 'auth-login'}">
                            Login
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
        name: "register"
    }
</script>

<style scoped>

</style>
