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
                <h5>Property Ads Lists</h5>
                <nuxt-link
                  class="btn btn-sm btn-info"
                  :to="{ name: 'account-property-ads-create'}">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  Create
                </nuxt-link>
              </div>
              <div class="card-body">
                <div class="search d-flex justify-content-between align-items-center">
                  <div class="form-group">
                    <input class="form-control custom-form-control" type="text" v-model="tableData.search"
                           placeholder="Search Table" @input="getData()">
                  </div>
                  <div class="form-group">
                    <select class="form-control custom-select-form-control" v-model="tableData.length" @change="getData()">
                      <option v-for="(records, index) in perPage" :key="index" :value="records">{{records}}</option>
                    </select>
                  </div>
                </div>
                <DataTable id="dataTable" :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders" @sort="sortBy"
                           class="">
                  <tbody>
                  <tr v-for="(value,i) in values" :key="value.id">
                    <td>{{i+1}}</td>
                    <!--              <td>-->
                    <!--                <img style="height: 50px; width: 50px" :src="imageUrl+value.image" alt="">-->
                    <!--              </td>-->
                    <td>{{value.start_date}}</td>
                    <td>
                      <div v-if="value.sale_type == 1"> Rent</div>
                      <div v-if="value.sale_type == 2"> Sale</div>
                    </td>
                    <td>{{value.rent_amount}}</td>
                    <td>{{value.security_money}}</td>
                    <td>
                      <b-button
                                :class="value.status == 1 ? 'btn-sm btn-info': 'btn-sm btn-danger'">
                        {{ value.status == 1 ? 'Active' : 'Inactive' }}
                      </b-button>
                    </td>
<!--                    <td>-->
<!--                      &lt;!&ndash;<nuxt-link :to="{name:'users-landlords-id-edit',params: { id: value.id }}" rel="tooltip"&ndash;&gt;-->
<!--                      &lt;!&ndash;class="btn btn-sm btn-success btn-simple"&ndash;&gt;-->
<!--                      &lt;!&ndash;title="Edit">&ndash;&gt;-->
<!--                      &lt;!&ndash;<font-awesome-icon icon="fa-solid fa-pen-to-square"/>&ndash;&gt;-->
<!--                      &lt;!&ndash;</nuxt-link>&ndash;&gt;-->
<!--                    </td>-->
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
    name: "properties",
    components: {DataTable, Pagination, Newsletter, Sidebar,},
    created() {
      this.getData();
    },
    data() {
      let sortOrders = {};
      let columns = [
        {width: '', label: 'Sl', name: 'id'},
        {width: '', label: 'Lease/Rent Start Date', name: 'start_date'},
        {width: '', label: 'Type', name: 'sale_type'},
        {width: '', label: 'Amount', name: 'rent_amount'},
        {width: '', label: 'Security money', name: 'security_money'},
        {width: '', label: 'Status', name: ''},
        // {width: '', label: 'Action', name: ''},
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
        perPage: ['10', '25', '50','100','500','2000','all'],
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
      }
    },
    methods: {
      getData(url = '/property/ad/list') {
        this.tableData.draw++;
        this.$axios.post(url, {params: this.tableData})
          .then(response => {
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
