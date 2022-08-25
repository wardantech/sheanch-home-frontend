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
      data:{
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
      errors: {}
    }
  },

  methods: {
    async userLogin() {
      await this.$auth.loginWith('local', {data: this.form})
        .then(response => {
          console.log(response)
          if(response.data.status == false){
            this.validation = false;
            this.active = true;

            this.$izitoast.success({
              title: 'Error !!',
              message: 'Credentials does not matched'
            })
          }
          else{
            this.$izitoast.success({
              title: 'Success !!',
              message: 'successfully logged in'
            })
            const path = this.$nuxt.context.from;

            if(path && path.name == 'property-id-show'){
              this.$nuxt.$options.router.push({name: 'property-id-show',params: { id: path.params.id }})
            }
            else{
              if(this.$auth.user.landlord_id){
                this.$nuxt.$options.router.push({name: 'account-dashboard-landlord'})
              }
              if(this.$auth.user.tenant_id){
                this.$nuxt.$options.router.push({name: 'account-dashboard-tenant'})
              }
            }

          }
        }).catch(error => {
          console.log(error)
          if(error.response.status == 422){
            console.log(error.response.data.errors)
            this.errors = error.response.data.errors
          }
          else{
            this.active = false;
            this.validation = true;
          }

        });


    },
  }
}
</script>

<style scoped>

</style>
