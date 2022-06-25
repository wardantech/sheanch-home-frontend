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
              <b-row>
                <b-col lg="12" md="12" sm="12">
                  <h4>
                    Your Current Credits:
                    <span class="pc-title">0</span>
                  </h4>
                </b-col>
              </b-row>

              <b-row>
                <b-col lg="4" md="6" sm="12">
                  <div class="dashboard-status status-1">
                    <div class="dashboard-status-content">
                      <h4>0</h4>
                      <span>Approved properties</span>
                    </div>
                    <div class="dashboard-status-icon">
                      <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </div>
                  </div>
                </b-col>

                <b-col lg="4" md="6" sm="12">
                  <div class="dashboard-status status-2">
                    <div class="dashboard-status-content">
                      <h4>0</h4>
                      <span>Pending approve properties</span>
                    </div>
                    <div class="dashboard-status-icon">
                      <font-awesome-icon icon="fa-solid fa-chart-pie" />
                    </div>
                  </div>
                </b-col>

                <b-col lg="4" md="6" sm="12">
                  <div class="dashboard-status status-3">
                    <div class="dashboard-status-content">
                      <h4>0</h4>
                      <span>Rejected properties</span>
                    </div>
                    <div class="dashboard-status-icon">
                      <font-awesome-icon icon="fa-solid fa-user" />
                    </div>
                  </div>
                </b-col>
              </b-row>

              <b-row>
                <b-col lg="12">
                  <b-card no-body>
                    <b-tabs v-model="tabIndex" small card>
                      <b-tab title="Active Logs">
                        <div class="text-center">
                          <h5>Oops!</h5>
                          <p>You have no activity logs yet</p>
                        </div>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </b-col>
              </b-row>
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
      name: "dashboard",
      components: {Newsletter, Sidebar}
    }
</script>

<style scoped>

</style>
