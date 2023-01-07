<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Submit your information</h5>
        </div>
      </div>
    </div>

    <div class="row">
      <b-col md="3">
        <b-form-group label="Your passport size photo">
          <Dropzone id="foo" ref="el" :options="options" :destroyDropzone="false"></Dropzone>
        </b-form-group>
      </b-col>
      <b-col md="6"></b-col>
      <b-col md="3">
        <div class="d-flex justify-content-end flex-column p-1 mt-2">
          <p class="mb-1"><b>Flat:</b> Sheanch home</p>
          <p class="mb-1"><b>Holding:</b> 1252</p>
          <p class="mb-1"><b>Road:</b> 04</p>
          <p class="mb-1"><b>Post code:</b> 1207</p>
        </div>
      </b-col>
    </div>

    <form @submit.prevent="store">
      <div class="form-group">
        <label for="tenant_name">Your name</label>
        <input type="text" id="tenant_name" class="form-control" v-model="form.tenant_name" placeholder="Your name">
      </div>

      <div class="form-group">
        <label for="fathers_name">Father's name</label>
        <input type="text" id="fathers_name" class="form-control" v-model="form.fathers_name" placeholder="Father's name">
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="date_of_birth">Date of birth</label>
          <input type="date" id="date_of_birth" class="form-control" v-model="form.date_of_birth">
        </div>
        <div class="form-group col-md-6">
          <label for="marital_status">Marital status</label>
          <select id="marital_status" v-model="form.marital_status" class="form-control">
            <option>Choose...</option>
            <option value="1">Single</option>
            <option value="2">Married</option>
            <option value="3">Divorced</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="present_address">Present address</label>
        <textarea v-model="form.present_address" id="present_address" class="form-control" cols="30" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="fathers_name">Occupation</label>
        <input type="text" id="fathers_name" class="form-control" v-model="form.occupation" placeholder="Occupation">
      </div>

      <div class="form-group">
        <label for="office_address">Office address (Optional)</label>
        <textarea v-model="form.office_address" id="office_address" class="form-control" cols="30" rows="3"></textarea>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="religion">Religion</label>
          <input type="text" id="religion" class="form-control" v-model="form.religion" placeholder="Religion">
        </div>
        <div class="form-group col-md-6">
          <label for="edu_qualif">Education Qualification</label>
          <input type="text" id="edu_qualif" class="form-control" v-model="form.edu_qualif" placeholder="Education Qualification">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="phone">Phone</label>
          <input type="text" id="phone" class="form-control" v-model="form.phone" placeholder="Your phone number">
        </div>
        <div class="form-group col-md-6">
          <label for="email">E-mail</label>
          <input type="email" id="email" class="form-control" v-model="form.email" placeholder="Your email">
        </div>
      </div>

      <div class="form-group">
        <label for="nid">National Id</label>
        <input type="text" id="nid" class="form-control" v-model="form.nid" placeholder="National Id">
      </div>

      <div class="form-group">
        <label for="passport">Passport number (Optional)</label>
        <input type="text" id="passport" class="form-control" v-model="form.passport" placeholder="Passport number">
      </div>

      <hr>
      <h6 for="emergency_contact">Emergency Contact : </h6>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="emergency-name">name</label>
          <input type="text" id="emergency-name" class="form-control" v-model="form.emergency_contact.name" placeholder="Name">
        </div>
        <div class="form-group col-md-6">
          <label for="emergency-relation">Relation</label>
          <input type="text" id="emergency-relation" class="form-control" v-model="form.emergency_contact.relation" placeholder="Relation">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="emergency-address">Address</label>
          <input type="text" id="emergency-address" class="form-control" v-model="form.emergency_contact.address" placeholder="Address">
        </div>
        <div class="form-group col-md-6">
          <label for="emergency-phone">Phone</label>
          <input type="text" id="emergency-phone" class="form-control" v-model="form.emergency_contact.phone" placeholder="Phone">
        </div>
      </div>

      <hr>
      <h6 class="d-flex justify-content-between align-items-center">
        <span>Family Members :</span>
        <div>
          <button type="button" @click="addMembers" class="btn btn-sm btn-primary mr-1">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
        </div>
      </h6>
      <div v-for="(member, index) in form.family_members" :key="index" class="form-row">
        <div class="form-group col-md-3">
          <label for="family_members-name">Name</label>
          <input type="text" id="family_members-name" class="form-control" v-model="member.name" placeholder="Name">
        </div>
        <div class="form-group col-md-2">
          <label for="family_members-age">Age</label>
          <input type="text" id="family_members-age" class="form-control" v-model="member.age" placeholder="Age">
        </div>
        <div class="form-group col-md-3">
          <label for="family_members-occupation">Occupation</label>
          <input type="text" id="family_members-occupation" class="form-control" v-model="member.occupation" placeholder="Occupation">
        </div>
        <div class="form-group col-md-3">
          <label for="family_members-phone">Phone</label>
          <input type="text" id="family_members-phone" class="form-control" v-model="member.phone" placeholder="Phone">
        </div>
        <div class="col-md-1 d-flex justify-content-center align-items-center" style="margin-top: 15px">
          <button type="button" @click="addMembers" class="btn btn-sm btn-primary mr-1">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
          <button type="button" @click="removeMember(member)" class="btn btn-sm btn-danger">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
        </div>
      </div>

      <hr>
      <h6 for="home_servant">Home servant (Optional):</h6>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="home_servant-name">name</label>
          <input type="text" id="home_servant-name" class="form-control" v-model="form.home_servant.name" placeholder="Name">
        </div>
        <div class="form-group col-md-6">
          <label for="home_servant-nid">National ID</label>
          <input type="text" id="home_servant-nid" class="form-control" v-model="form.home_servant.nid" placeholder="National ID">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="home_servant-address">Present Address</label>
          <input type="text" id="home_servant-address" class="form-control" v-model="form.home_servant.address" placeholder="Address">
        </div>
        <div class="form-group col-md-6">
          <label for="home_servant-phone">Phone</label>
          <input type="text" id="home_servant-phone" class="form-control" v-model="form.home_servant.phone" placeholder="Phone">
        </div>
      </div>

      <hr>
      <h6 for="driver">Driver (Optional):</h6>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="driver-name">name</label>
          <input type="text" id="driver-name" class="form-control" v-model="form.driver.name" placeholder="Name">
        </div>
        <div class="form-group col-md-6">
          <label for="driver-nid">National ID</label>
          <input type="text" id="driver-nid" class="form-control" v-model="form.driver.nid" placeholder="National ID">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="driver-address">Address</label>
          <input type="text" id="driver-address" class="form-control" v-model="form.driver.address" placeholder="Address">
        </div>
        <div class="form-group col-md-6">
          <label for="driver-phone">Phone</label>
          <input type="text" id="driver-phone" class="form-control" v-model="form.driver.phone" placeholder="Phone">
        </div>
      </div>

      <hr>
      <h6 for="previus_landlord">Previus landlord (Optional):</h6>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="previus_landlord-name">name</label>
          <input type="text" id="previus_landlord-name" class="form-control" v-model="form.previus_landlord.name" placeholder="Name">
        </div>
        <div class="form-group col-md-6">
          <label for="previus_landlord-phone">Phone</label>
          <input type="text" id="previus_landlord-phone" class="form-control" v-model="form.previus_landlord.phone" placeholder="Phone">
        </div>
      </div>

      <div class="form-group">
        <label for="previus_landlord-address">Address</label>
        <input type="text" id="previus_landlord-address" class="form-control" v-model="form.previus_landlord.address" placeholder="Address">
      </div>
      <hr>

      <div class="form-group">
        <label for="leaving_home">Reasons for previous leaving home (Optional)</label>
        <textarea v-model="form.leaving_home" id="leaving_home" class="form-control" cols="30" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="issue_date">Date</label>
        <input type="date" id="issue_date" class="form-control" v-model="form.issue_date">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  layout: 'dashboard',
  name: "deed-information",
  components: { Dropzone },
  data() {
    return {
      options: {
        url: "url",
        addRemoveLinks: true,
        headers: { "Authorization": this.$auth.strategy.token.get() },
        maxFiles: 1,
        autoProcessQueue: false,
        acceptedFiles: ".jpeg,.jpg,.png"
      },
      form: {
        tenant_name: '',
        fathers_name: '',
        date_of_birth: '',
        marital_status: '',
        occupation: '',
        office_address: '',
        religion: '',
        edu_qualif: '',
        phone: '',
        email: '',
        nid: '',
        passport: '',
        emergency_contact: {
          name: '',
          relation: '',
          address: '',
          phone: '',
        },
        family_members: [{
          name: '',
          age: '',
          occupation: '',
          phone: ''
        }],
        home_servant: {
          name: '',
          nid: '',
          address: '',
          phone: ''
        },
        driver: {
          name: '',
          nid: '',
          address: '',
          phone: ''
        },
        previus_landlord: {
          name: '',
          phone: '',
          address: ''
        },
        leaving_home: '',
        issue_date: ''
      }
    }
  },
  methods: {
    async store() {
      await await this.$axios.$post('property/deed/information/store', this.form)
    },
    addMembers(index) {
      const newMembers = {
        name: '',
        age: '',
        occupation: '',
        phone: ''
      };

      this.form.family_members.splice(index, 0, newMembers);
    },
    removeMember(member) {
      this.form.family_members = this.form.family_members.filter(
          (q) => q !== member
      );
    }
  }
}
</script>

<style>

</style>
