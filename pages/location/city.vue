<template>
    <div>
        <div class="page-title">
            <b-container>
                <b-row class="justify-content-center">
                    <b-col lg="10" md="12">
                        <div class="full-search-2 eclip-search italian-search hero-search-radius shadow-hard">
                            <div class="hero-search-content">
                                <b-row>
                                    <b-col lg="4" md="4" sm="12" class="b-r">
                                        <div class="form-group">
                                            <div class="property-type">
                                                <ul>
                                                    <li>
                                                        <input id="cp-sale" value="sale" name="type" type="radio" checked="checked" class="checkbox-custom">
                                                        <label for="cp-sale" class="checkbox-custom-label">For Sale</label>
                                                    </li>
                                                    <li>
                                                        <input id="cp-rent" value="rent" name="type" type="radio" class="checkbox-custom">
                                                        <label for="cp-rent" class="checkbox-custom-label">For Rent</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </b-col>

                                    <b-col lg="6" md="5" sm="12" p-0 elio>
                                        <div class="form-group">
                                            <div class="input-icon">
                                                <b-form-input class="form-control-custom" placeholder="Search for a location"></b-form-input>
                                                <font-awesome-icon icon="fa-solid fa-location-dot"/>
                                            </div>
                                        </div>
                                    </b-col>

                                    <b-col lg="2" md="3" sm="12">
                                        <b-link class="btn search-btn black">
                                            Search
                                        </b-link>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <section class="gray">
            <b-container>
                <b-row>
                    <b-col lg="12" md="12" list-layout>
                        <b-row class="justify-content-center">
                            <b-col lg="12" md="12">
                                <div class="shorting-box">
                                    <div class="shorting-box-item">
                                        <div class="left-column pull-left">
                                            <h4 class="m-0">Found 1 - 2 Of 2 Results</h4>
                                        </div>
                                    </div>
                                    <div class="shorting-box-right">
                                        <div class="sorting-by">
                                            <b-form-select v-model="selected" :options="options"></b-form-select>
                                        </div>
                                        <ul class="sorting-list">
                                            <li>
                                                <b-link>
                                                    <b-icon icon="grid" aria-hidden="true"></b-icon>
                                                </b-link>
                                            </li>
                                            <li>
                                                <b-link>
                                                    <b-icon icon="list" aria-hidden="true"></b-icon>
                                                </b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col lg="6" md="12" class="list-layout">

                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>
    export default {
        name: "city",

        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Sort By' },
                    { value: '0', text: 'Oldest' },
                    { value: '1', text: 'Newest' },
                    { value: '2', text: 'Price: Low To High' },
                    { value: '3', text: 'Price: High To Low' },
                    { value: '4', text: 'Price: High To Low' },
                    { value: '5', text: 'Name: A TO Z' },
                    { value: '6', text: 'Name: Z TO A' },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
