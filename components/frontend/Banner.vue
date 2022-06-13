<template>
    <div>
        <div class="banner image-cover" style="background: url('https://resido.thesky9.com/storage/banners/banner-1.jpg') no-repeat;">
            <b-container>
                <div class="banner-form">
                    <div class="banner-form-title">
                        <h1>Find Accessible Homes To Rent</h1>
                    </div>

                    <form action="" method="POST">
                        <div class="banner-form-content">
                            <b-row>
                                <b-col lg="12" md="12" sm="12">
                                    <b-form-group>
                                        <div class="search-location">
                                            <b-form-input id="location" type="text" placeholder="Search for a location" required></b-form-input>
                                            <b-img src="https://resido.thesky9.com/themes/resido/img/pin.svg" width="18"></b-img>
                                        </div>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col lg="6" md="6" sm="6">
                                    <b-form-group label="Min Price" label-for="min_price">
                                        <select class="form-control" id="min_price">
                                            <option>No Min</option>
                                            <option>500</option>
                                            <option>1000</option>
                                            <option>2000</option>
                                            <option>50000</option>
                                            <option>10000</option>
                                        </select>
                                    </b-form-group>
                                </b-col>

                                <b-col lg="6" md="6" sm="6">
                                    <b-form-group label="Max Price" label-for="max_price">
                                        <select class="form-control" id="max_price">
                                            <option>No Max</option>
                                            <option>1000</option>
                                            <option>2000</option>
                                            <option>5000</option>
                                            <option>10000</option>
                                            <option>20000</option>
                                        </select>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col lg="6" md="6" sm="6">
                                    <b-form-group label="Property Type" label-for="property_type">
                                        <select class="form-control" id="property_type">
                                            <option>Category</option>
                                            <option>Apartment</option>
                                            <option>Villa</option>
                                            <option>Conda</option>
                                            <option>House</option>
                                        </select>
                                    </b-form-group>
                                </b-col>

                                <b-col lg="6" md="6" sm="6">
                                    <b-form-group label="Bed Rooms" label-for="bed_rooms">
                                        <select class="form-control" id="bed_rooms">
                                            <option>Bedroom</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col>
                                    <b-form-group label="Property Location" label-for="property_location">
                                        <select class="form-control" id="property_location">
                                            <option>City</option>
                                            <option>Dhaka</option>
                                            <option>Rajshahi</option>
                                            <option>Pabna</option>
                                            <option>Bagha</option>
                                            <option>Bogra</option>
                                        </select>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="banner-form-action">
                            <b-button variant="primary banner-form-action-button">Search Result</b-button>
                        </div>
                    </form>
                </div>
            </b-container>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>

</style>
