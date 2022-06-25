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
              <b-row>
                <b-col md="12">
                  <h4>Security</h4>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <div class="setting-form">
                    <b-form>
                      <div class="form-group">
                        <label for="password">New password</label>
                        <input type="password" name="password" id="password" class="form-control">
                      </div>

                      <div class="form-group">
                        <label for="password_confirmation">Confirmation password</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" class="form-control">
                      </div>

                      <div class="form-group">
                        <button type="submit" class="btn btn-secondary btn-browse-more">Update password</button>
                      </div>
                    </b-form>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <!--/. Main Content -->
        </b-row>
      </b-container>
    </section>

    <!-- Start newsletter -->
    <Newsletter/>
    <!-- End newsletter -->
  </div>
</template>

<script>
  import Sidebar from "../../components/frontend/dashboard/Sidebar";
  import Newsletter from "../../components/frontend/Newsletter";

  export default {
    name: "security",
    components: {Newsletter, Sidebar}
  }
</script>

<style scoped>

</style>
