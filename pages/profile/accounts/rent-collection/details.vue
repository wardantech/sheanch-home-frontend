<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h5>{{ title }}</h5>
      <div>
        <button type="button" class="btn btn-sm btn-danger">
          {{ totalDue }} <span class="badge badge-light">Total Due</span>
          <span class="sr-only">unread messages</span>
        </button>
        <nuxt-link
          v-if="totalDue > 0"
          class="btn btn-primary btn-sm"
          :to="{ name: 'profile-accounts-rent-collection-id-due', params: { id:  transationId } }"
        >
          Due Collect
        </nuxt-link>
      </div>
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
            <td>{{ dateFromat(value.created_at) }}</td>
            <td>
              <span v-if="value.payment_method == 1" class="badge badge-primary">Cash</span>
              <span v-if="value.payment_method == 2" class="badge badge-success">Bank</span>
              <span v-if="value.payment_method == 3" class="badge badge-dark">Mobile Bank</span>
            </td>
            <td>{{ (value.mobile_bank === null) ? '--':  value.mobile_bank.name }}</td>
            <td>{{ value.transaction_id ?? '--' }}</td>
            <td>{{ value.cash_in }}</td>

            <td>
              <nuxt-link :to="{ name: 'profile-accounts-rent-collection-id-edit', params: { id: value.id } }" rel="tooltip"
                class="btn btn-sm btn-success btn-simple" title="Edit">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </nuxt-link>

              <b-button class="btn btn-sm btn-danger btn-simple" @click="deleteItem(value.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </b-button>
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
  name: "rent-collection-details",
  components: { DataTable, Pagination },
  mixins: [dateMixin],
  data() {
    let sortOrders = {};
    let columns = [
      { width: '', label: 'Sl', name: 'id' },
      { width: '', label: 'Created at', name: 'created_at' },
      { width: '', label: 'Method', name: 'method' },
      { width: '', label: 'Mobile Bank', name: 'mobile_bank' },
      { width: '', label: 'Transaction Id', name: 'transaction_id' },
      { width: '', label: 'Amount', name: 'amount' },
      { width: '', label: 'Actions', name: 'actions' },
    ];
    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });
    return {
      title: '',
      totalDue: '',
      transationId: '',
      deedInfo: {},
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
        deedId: '',
        month: ''
      },
      pagination: {
        lastPage: '',
        currentPage: '',
        total: '',
        lastPageUrl: '',
        nextPageUrl: '',
        prevPageUrl: '',
        from: '',
        to: ''
      },
    }
  },
  async created() {
    this.deedInfo = this.$store.getters['transactions/getDeedInfo'];
    if (!this.deedInfo.deedId) {
      this.$router.push({ name: 'profile-accounts-rent-collection' });
      return;
    }
    this.tableData.deedId = this.deedInfo.deedId;
    this.tableData.month = this.deedInfo.month;
    this.getData();
  },
  methods: {
    getData(url = 'property/deed/get-deed-transaction-month') {
      this.tableData.draw++;
      this.$axios.post(url, { params: this.tableData })
        .then(response => {
          let data = response.data;
          let propertyName = response.data.data.data[0].property.name;
          let tenantName = response.data.data.data[0].deed.tenant.name;
          let transDate = response.data.data.data[0].date;
          let rent = response.data.data.data[0].property.total_amount;

          this.transationId = response.data.data.data[0].id;
          this.totalDue = (rent - response.data.pay_amount);
          this.title = propertyName + ' ('+ tenantName +') ' + this.monthYear(transDate) + ', All Transaction Reports.';
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
        await this.$axios.$post('property/deed/delete-property-payment', { id: id })
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