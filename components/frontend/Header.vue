<template>
    <div>
        <header class="header header-light head-shadow">
            <b-container>
                <b-navbar class="header-navber" toggleable="lg">
                    <b-navbar-brand href="#" class="navbar-brand-logo">
                        <img src="../../assets/frontend/images/logo.png" alt="logo">
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="custom-navbar">
                            <b-nav-item href="#">Home</b-nav-item>

                            <b-nav-item-dropdown class="custom-dropdown-menu" text="Listing" right>
                                <b-dropdown-item href="#">Listing Layout</b-dropdown-item>
                                <b-dropdown-item href="#">Grid Layout</b-dropdown-item>
                                <b-dropdown-item href="#">Half Map Search</b-dropdown-item>
                            </b-nav-item-dropdown>

                            <b-nav-item-dropdown class="custom-dropdown-menu" text="Features" right>
                                <b-dropdown-item href="#">Single Property</b-dropdown-item>
                                <b-dropdown-item href="#">Agents</b-dropdown-item>
                                <b-dropdown-item href="#">My Account</b-dropdown-item>
                                <b-dropdown-item href="#">Submit Property</b-dropdown-item>
                            </b-nav-item-dropdown>

                            <b-nav-item-dropdown class="custom-dropdown-menu" text="Pages" right>
                                <b-dropdown-item href="#">Blog Page</b-dropdown-item>
                                <b-dropdown-item href="#">Blog Detail</b-dropdown-item>
                                <b-dropdown-item href="#">Pricing</b-dropdown-item>
                                <b-dropdown-item href="#">Error Page</b-dropdown-item>
                                <b-dropdown-item href="#">Contact</b-dropdown-item>
                            </b-nav-item-dropdown>

                            <b-nav-item href="#">Sign Up</b-nav-item>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto navigation-right">
                            <b-nav-item href="#" class="navigation-right-item">
                                <font-awesome-icon class="mr-2" icon="fa-solid fa-upload" />
                                Add Property
                            </b-nav-item>

                            <b-button class="sign-in-button">
                                <font-awesome-icon icon="fa-solid fa-user" />
                                Sign In
                            </b-button>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </b-container>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
