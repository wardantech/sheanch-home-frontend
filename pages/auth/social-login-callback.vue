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
                <h2 class="text-center">Join us</h2>
                <div class="mt-3">
                  <b-form-group>
                    <b-form-radio-group
                      id="btn-radios-2"
                      v-model="form.type"
                      :options="options"
                      button-variant="outline-success"
                      size="lg"
                      name="radio-btn-outline"
                      buttons
                      class="btn-block"
                    ></b-form-radio-group>
                    <strong class="text-danger" style="font-size: 12px" v-if="errors.type">{{
                        errors.type[0]
                      }}</strong>
                  </b-form-group>
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
  name: "socail-callback",
  auth: false,
  validation: false,
  async created() {
    await this.$auth.login({
      data: {
        token: this.token,
      }
    })

    this.$nuxt.$options.router.push({name: 'account-dashboard-landlord'})

    // if(this.$auth.loggedIn){
    //   if(this.$auth.user.landlord_id){
    //     this.$nuxt.$options.router.push({name: 'account-dashboard-landlord'})
    //   }
    //   if(this.$auth.user.tenant_id){
    //     this.$nuxt.$options.router.push({name: 'account-dashboard-tenant'})
    //   }
    // }
  },
  data() {
    return {
      token: this.$route.query.token,
      options: [
        {text: 'Tenant', value: '3'},
        {text: 'Landlord', value: '2'}
      ],
      errors: {}
    }
  },
}
</script>

<style scoped>

</style>
