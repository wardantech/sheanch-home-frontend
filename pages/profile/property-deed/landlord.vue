<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h5>Property deed Lists</h5>
    </div>
    <div class="card-body p-0 mt-4">
      <div class="search d-flex justify-content-between align-items-center">
        <div class="form-group">
          <input class="form-control custom-form-control" type="text" v-model="tableData.search"
            placeholder="Search Table" @input="getData()">
        </div>
        <div class="form-group">
          <select class="form-control custom-select-form-control" v-model="tableData.length" @change="getData()">
            <option v-for="(records, index) in perPage" :key="index" :value="records">{{ records }}</option>
          </select>
        </div>
      </div>
      <DataTable id="dataTable" :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders" @sort="sortBy" class="">
        <tbody>
          <tr v-for="(value, i) in values" :key="value.id">
            <td>{{ i + 1 }}</td>
            <td>{{ value.tenant.name }}</td>
            <td>{{ value.property.name }}</td>
            <td>
              <div v-if="value.property.sale_type == 1"> Rent</div>
              <div v-if="value.property.sale_type == 2"> Sale</div>
            </td>
            <td>{{ value.property_ad.rent_amount }}</td>
            <td>
              <select @change="statusChange({ id: value.id, status: $event.target.value })" name="" id="status"
                class="form-control custom-select-form-control">
                <option :selected="value.status == 1" value="1">Send to landlord</option>
                <option :selected="value.status == 2" value="2">Completed</option>
                <option :selected="value.status == 3" value="3">Decline</option>
              </select>
            </td>
            <td>
              <nuxt-link :to="{ name: 'profile-property-id-details', params: { id: value.property_id } }" rel="tooltip"
                class="btn btn-sm btn-info btn-simple" title="Details">
                <font-awesome-icon icon="fa-solid fa-hotel" />
              </nuxt-link>

              <nuxt-link :to="{ name: 'profile-property-ads-id-show', params: { id: value.property_ad_id } }"
                rel="tooltip" class="btn btn-sm btn-warning btn-simple" title="View Ad">
                <font-awesome-icon icon="fa-solid fa-eye" />
              </nuxt-link>

              <nuxt-link :to="{ name: 'profile-me-id-show-tenant', params: { id: value.landlord_id } }"
                rel="tooltip" class="btn btn-sm btn-success btn-simple" title="Show tenant details">
                <font-awesome-icon icon="fa-solid fa-binoculars" />
              </nuxt-link>

              <nuxt-link :to="{ name: 'profile-me-id-show-tenant', params: { id: value.landlord_id } }"
                rel="tooltip" class="btn btn-sm btn-secondary btn-simple" title="Get payment">
                <font-awesome-icon icon="fa-solid fa-hand-holding-dollar" />
              </nuxt-link>

            </td>
          </tr>
        </tbody>
      </DataTable>

      <pagination :pagination="pagination" @prev="getData(pagination.prevPageUrl)"
        @next="getData(pagination.nextPageUrl)">
      </pagination>

    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Datatable/Pagination";
import DataTable from "@/components/Datatable/DataTable";

export default {
  layout: 'dashboard',
  name: "properties",
  components: { DataTable, Pagination },
  created() {
    this.getData();
  },
  data() {
    let sortOrders = {};
    let columns = [
      { width: '', label: 'Sl', name: 'id' },
      { width: '', label: 'Tenant', name: 'name' },
      { width: '', label: 'Property', name: 'property' },
      { width: '', label: 'Sale/Lease Type', name: 'lease_type' },
      { width: '', label: 'Amount', name: 'rent_amount' },
      { width: '', label: 'Status', name: 'status' },
      { width: '', label: 'Actions', name: 'actions' },
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
    }
  },
  methods: {
    getData(url = 'property/deed/landlord-list') {
      this.tableData.draw++;
      this.$axios.post(url, { params: this.tableData })
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

    async statusChange(params) {
      await this.$axios.$post('property/deed/change-status/' + params.id, params)
        .then(response => {
          this.$izitoast.success({
            title: 'Success !!',
            message: 'Deed status change successfully!'
          })
          this.getData()
        })
        .catch(error => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors
          } else {
            alert(error.response.message)
          }
        })
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
