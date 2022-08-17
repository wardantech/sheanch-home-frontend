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
                    <h5>Property Ad Details</h5>
                  </div>
                </div>

              </div>
              <div>

                <b-row>
                  <b-col md="8">
                    <table class="table table-bordered table-hover">
                      <tbody>
                      <tr>
                        <td>Property Name</td>
                        <td>Hello world</td>
                      </tr>
                      </tbody>
                    </table>
                  </b-col>
                  <b-col md="4">
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" height="150px" alt="Image 1"></b-img>
                  </b-col>
                </b-row>
              </div>
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
  import Sidebar from "@/components/frontend/dashboard/Sidebar";
  import Newsletter from "@/components/frontend/Newsletter";

  export default {
    name: "show-tenant",
    components: {Newsletter, Sidebar}
  }
</script>

<style scoped>

</style>
