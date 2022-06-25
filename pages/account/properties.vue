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
              <form action="">
                <div class="page-search">
                  <div>
                    <div class="form-group">
                      <input class="form-control input-search" type="text" name="search" placeholder="Search...">
                    </div>
                  </div>

                  <div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-secondary button-reload">
                        <font-awesome-icon icon="fa-solid fa-rotate" />
                        Reload
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div class="table-body">


                <b-table
                  :items="items"
                  :fields="fields"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  sort-icon-left
                  responsive="sm"
                ></b-table>


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
  import Sidebar from "../../components/frontend/dashboard/Sidebar";
  import Newsletter from "../../components/frontend/Newsletter";

  export default {
    name: "properties",
    components: {Newsletter, Sidebar},
    data() {
      return {
        sortBy: 'id',
        sortDesc: false,
        fields: [
          { key: 'id', sortable: true },
          { key: 'image', sortable: false },
          { key: 'name', sortable: true },
          { key: 'property', sortable: true },
          { key: 'created', sortable: true },
          { key: 'status', sortable: true },
          { key: 'expire', sortable: true },
          { key: 'operation', sortable: true },
        ],
        items: [
          { id: 40, image: 'Dickerson', name: 'Macdonald', property: 'Property Type', created: '07-12-2022', status: 'Moderation status', expire: '30-10-2022', operation: 'Operation'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
