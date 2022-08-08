<template>
  <div>
    <section class="bg-light">
      <b-container fluid>
        <b-row>
          <!-- Sidebar -->
          <b-col lg="3" md="12">
            <Sidebar/>
          </b-col>
          <!-- /.Sidebar -->

          <!-- Main Content -->
          <b-col lg="9" md="12">
            <div class="dashboard-wrapper">
              <div class="page-search">
                <div>
                  <div class="form-group">
                    <h5>Change your password</h5>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'account-profile-id-landloard', params: { id: $auth.user.landlord_id }}">
                      <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                      Back to profile
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div>
                <b-row>
                  <b-col md="12">
                    <form @submit.prevent="update">
                      <b-form-group label="Current password">
                        <b-form-input class="custom-input-control" v-model="form.currentPassword" type="password"
                                      placeholder="Current password"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.currentPassword">{{
                          errors.currentPassword[0]
                          }}</strong>
                      </b-form-group>

                      <b-form-group label="New password">
                        <b-form-input class="custom-input-control" v-model="form.password" type="password"
                                      placeholder="New password"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.password">{{
                          errors.password[0]
                          }}</strong>
                      </b-form-group>

                      <b-form-group label="Confirm password">
                        <b-form-input class="custom-input-control" v-model="form.password_confirmation" type="password"
                                      placeholder="Confirm password"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.password_confirmation">{{
                          errors.password[0]
                          }}</strong>
                      </b-form-group>

                      <b-form-group>
                        <b-button type="submit" variant="dark">Update</b-button>
                      </b-form-group>
                    </form>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <!-- /.Main Content -->
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import Sidebar from "@/components/frontend/dashboard/Sidebar";
  export default {
    name: "change-password",
    components: {Sidebar},
    data() {
      return {
        form: {
          password: '',
          currentPassword: '',
          password_confirmation: ''
        },
        errors: {}
      }
    },
    methods: {
      async update() {
        await this.$axios.$post('profile/landlord/password', this.form)
          .then(response => {
            if(response.status == false){
              this.$izitoast.error({
                title: 'Error !!',
                message: response.message
              });

              this.$router.push({name: 'account-profile-id-change-password'});
            }
            else{
              this.$izitoast.success({
                title: 'Success !!',
                message: 'Password change successfully!'
              });

              this.$auth.logout();
              this.$nuxt.$options.router.push({name: 'login'})
            }
          })
          .catch(error => {
            if(error.response.status == 422){
              this.errors = error.response.data.errors
            }
            else{
              alert(error.response.message)
            }
          })
      },
    }
  }
</script>

<style scoped>

</style>
