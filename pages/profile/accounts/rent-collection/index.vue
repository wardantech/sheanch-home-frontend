<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h5>Property Payment Lists</h5>
      <nuxt-link class="btn btn-sm btn-info" :to="{ name: 'profile-accounts-rent-collection-create' }">
        <font-awesome-icon icon="fa-solid fa-plus" />
        Collection
      </nuxt-link>
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
            <td>{{ value.property_name }} ({{ value.tenant_name }})</td>
            <td>{{ value.amount }}</td>
            <td>{{ (value.property_amount - value.amount)  }}</td>

            <td>
              <!-- <nuxt-link :to="{ name: 'profile-accounts-rent-collection-id-edit', params: { id: value.id } }" rel="tooltip"
                class="btn btn-sm btn-success btn-simple" title="Edit">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </nuxt-link>

              <nuxt-link v-if="value.due_amount > 0" :to="{ name: 'profile-accounts-rent-collection-id-due', params: { id: value.id } }" rel="tooltip"
                class="btn btn-sm btn-info btn-simple" title="Collect due payment">
                <font-awesome-icon icon="fa-solid fa-hand-holding-dollar" />
              </nuxt-link>

              <b-button class="btn btn-sm btn-danger btn-simple" @click="deleteItem(value.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </b-button> -->
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
import { dateMixin } from '../../../../mixins/date-mixin';

export default {
  layout: 'dashboard',
  name: "rent-collection",
  components: { DataTable, Pagination },
  mixins: [dateMixin],

  created() {
    this.getData();
  },
  data() {
    let sortOrders = {};
    let columns = [
      { width: '', label: 'Sl', name: 'id' },
      { width: '', label: 'Property', name: 'property' },
      { width: '', label: 'Amount', name: 'amount' },
      { width: '', label: 'Due', name: 'due' },
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
        userId: this.$auth.user.id
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
    getData(url = 'property/deed/get-property-payments') {
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
          alert(errors);
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

    // Destroy Rent Payment
    async deleteItem(id) {
        let result = confirm("Want to delete?");
        if (result) {
          await this.$axios.$post('property/deed/delete-property-payment', {id: id})
            .then(response => {
              this.getData();

              this.$izitoast.success({
                title: 'Success !!',
                message: 'Payment deleted successfully!'
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
  }
}
</script>

<style>

</style>
