<template>
  <div>
    <section>
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="6">
            <div class="auth-content">
              <div class="auth-content-body">
                <h2 class="text-center">OTP Verification</h2>
                <br>
                <div class="login-form">
                  <b-form class="simple-form">
                    <b-row>
                      <b-col sm="12">
                        <b-form-group v-slot="{ ariaDescribedby }" label="Join as">
                          <b-form-radio-group
                            id="btn-radios-2"
                            v-model="selected"
                            :options="options"
                            :aria-describedby="ariaDescribedby"
                            button-variant="outline-success"
                            size="lg"
                            name="radio-btn-outline"
                            buttons
                            class="btn-block"
                          ></b-form-radio-group>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <div v-if="mobile_area">
                      <b-row>
                        <b-col sm="12">
                          <b-form-group>
                            <div class="input-with-icon">
                              <b-form-input v-model="mobile" type="text" placeholder="Phone"></b-form-input>
                              <b-icon icon="telephone"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-form-group>
                        <b-button block @click="sendOTP" class="btn btn-browse-more">Send Code</b-button>
                      </b-form-group>
                    </div>

                    <div v-if="otp_area">
                      <b-row>
                        <b-col sm="12">
                          <b-form-group>
                            <div class="input-with-icon">
                              <b-form-input type="text" placeholder="Enter OTP Code"></b-form-input>
                              <b-icon icon="telephone"></b-icon>
                            </div>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-form-group>
                        <b-button block class="btn btn-browse-more">Verify</b-button>
                      </b-form-group>
                    </div>

                    <b-form-group class="text-center">
                      <p>
                        Have an account already?
                        <nuxt-link
                          class="text-danger"
                          :to="{ name: 'login'}">
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
  name: "otp-verify",
  auth: false,
  data() {
    return {
      mobile_area: true,
      otp_area: false,
      mobile: '',
      selected: '',
      options: [
        {text: 'Tenant', value: '3'},
        {text: 'Landlord', value: '2'}
      ]
    }
  },
  methods: {
    async sendOTP() {
      await this.$axios.$post('send-otp', {mobile: this.mobile})
        .then(response => {
          console.log(response);
        })
    }
  }
}
</script>

<style scoped>

</style>
