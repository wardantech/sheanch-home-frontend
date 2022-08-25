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
              <div class="d-flex justify-content-between align-items-center">
                <h5>All wishlists</h5>
              </div>
              <div class="card-body p-0 mt-4">
                <div class="search d-flex justify-content-between align-items-center">
                  <div class="form-group">
                    <input class="form-control custom-form-control" type="text" v-model="tableData.search"
                           placeholder="Search Table" @input="getData()">
                  </div>
                  <div class="form-group">
                    <select class="form-control custom-select-form-control" v-model="tableData.length"
                            @change="getData()">
                      <option v-for="(records, index) in perPage" :key="index" :value="records">{{ records }}</option>
                    </select>
                  </div>
                </div>
                <DataTable id="dataTable" :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders" @sort="sortBy"
                           class="">
                  <tbody>
                  <tr v-for="(value,i) in values" :key="value.id">
                    <td>{{ i + 1 }}</td>
                    <td>
                      {{ value.property_ad.property.name }}
                    </td>
                    <td>
                      <nuxt-link :to="{name:'property-id-show',params: { id: value.property_ad.property.id }}" rel="tooltip"
                                 class="btn btn-sm btn-info btn-simple"
                                 title="View">
                        <font-awesome-icon icon="fa-solid fa-eye"/>
                      </nuxt-link>
                      <b-button class="btn btn-sm btn-danger btn-simple" @click="deleteItem(value.id)">
                        <font-awesome-icon icon="fa-solid fa-trash"/>
                      </b-button>
                    </td>
                  </tr>
                  </tbody>
                </DataTable>

                <pagination :pagination="pagination"
                            @prev="getData(pagination.prevPageUrl)"
                            @next="getData(pagination.nextPageUrl)">
                </pagination>

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
  import Sidebar from "../../../components/frontend/dashboard/Sidebar";
  import Newsletter from "../../../components/frontend/Newsletter";
  import Pagination from "../../../components/Datatable/Pagination";
  import DataTable from "../../../components/Datatable/DataTable";


  export default {
    name: "index",
    components: {DataTable, Pagination, Newsletter, Sidebar,},
    created() {
      this.getData();
    },
    data() {
      let sortOrders = {};
      let columns = [
        {width: '10%', label: 'Sl', name: 'id'},
        {width: '', label: 'Property name', name: 'propertyname'},
        {width: '20%', label: 'Action', name: ''},
      ];
      columns.forEach((column) => {
        sortOrders[column.name] = -1;
      });
      return {
        values: [],
        sum: [],
        columns: columns,
        sortKey: 'id',
        sortOrders: sortOrders,
        perPage: ['10', '25', '50', '100', '500', '2000', 'all'],
        tableData: {
          draw: 0,
          length: 10,
          search: '',
          column: 0,
          dir: 'desc',
        },
        pagination: {
          lastPage: '',
          currentPage: '',
          total: '',
          lastPageUrl: '',
          nextPageUrl: '',
          prevPageUrl: '',
          from: '',
          to: '',
        },
        tenant_id: this.$auth.user.tenant_id
      }
    },
    methods: {
      getData(url = '/wishlist/get-lists') {
        this.tableData.draw++;
        this.$axios.post(url, {params: this.tableData, tenantId: this.tenant_id})
          .then(response => {
            console.log(response);
            let data = response.data;
            if (this.tableData.draw == data.draw) {
              this.values = data.data.data;
              this.configPagination(data.data);
            }
          })
          .catch(errors => {
            //console.log(errors);
          }).finally(() => {
        });
      },

      async deleteItem(id) {
        let result = confirm("Want to delete?");
        if (result) {
          await this.$axios.$post('wishlist/delete', {wishlistId: id, tenantId: this.tenant_id})
            .then(response => {
              if (id) {
                this.values.splice(this.values.indexOf(id), 1);
              }
              this.$izitoast.success({
                title: 'Success !!',
                message: 'Wishlist removed successfully!'
              });
            })
            .catch(error => {
              if (error.response.status == 422) {
                this.errors = error.response.data.errors
              }
              else {
                alert(error.response.message)
              }
            })
        }
      },

      configPagination(data) {
        this.pagination.lastPage = data.last_page;
        this.pagination.currentPage = data.current_page;
        this.pagination.total = data.total;
        this.pagination.lastPageUrl = data.last_page_url;
        this.pagination.nextPageUrl = data.next_page_url;
        this.pagination.prevPageUrl = data.prev_page_url;
        this.pagination.from = data.from;
        this.pagination.to = data.to;
      },

      sortBy(key) {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1;
        this.tableData.column = this.getIndex(this.columns, 'name', key);
        this.tableData.dir = this.sortOrders[key] === 1 ? 'asc' : 'desc';
        this.getData();
      },
      getIndex(array, key, value) {
        return array.findIndex(i => i[key] == value)
      },
    }
  }
</script>

<style scoped>

</style>
