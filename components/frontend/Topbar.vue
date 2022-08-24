<template>
    <div>
        <div class="top-bar bg-brand d-none d-sm-block">
            <b-container>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="currency">
                        <ul class="language-list">
                            <li>
                                <a href="#">
                                    <img src="https://flagicons.lipis.dev/flags/4x3/bd.svg"/>
                                    <span>Bangladesh</span>
                                </a>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="top-bar-right d-flex align-items-center">
                        <div class="top-bar-wishlist">
                            <a class="text-white" href="#">
                                <font-awesome-icon icon="fa-solid fa-heart" />
                                Wishlist {{wishlist}}
                            </a>
                        </div>
                        <!--<div class="ms-3 text-white">-->
                            <!--<b-dropdown size="sm" text="Lang" class="m-2 top-bar-right-lang">-->
                                <!--<b-dropdown-item-button>EN</b-dropdown-item-button>-->
                                <!--<b-dropdown-item-button>BN</b-dropdown-item-button>-->
                                <!--<b-dropdown-item-button>LN</b-dropdown-item-button>-->
                            <!--</b-dropdown>-->
                        <!--</div>-->
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Topbar",
      data(){
        return{
          //wishlist_count: 0
        }
      },
      computed:{
          wishlist(){
            return this.$store.getters['wishlist/getWishlist']
          }
      },

    }
</script>

<style scoped>

</style>
