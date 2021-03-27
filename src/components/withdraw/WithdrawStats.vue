<template>
  <div class="columns m-0 stats">
    <div class="column">
      <div class="stat mt-2 has-background-success">
        <div class="level is-mobile">
          <div class="level-left">
            <img height="45" width="45" src="@/assets/point_white.svg" />
          </div>
          <div class="level-right">
            <div class="level-item has-text-right">
              <div>
                <span class="heading has-text-white has-text-weight-normal">
                  Points
                </span>
                <span class="title heading is-4 has-text-white has-text-weight-normal">
                  <div v-if="user_points == -1" class="lds-dual-ring"></div>
                  <div v-else>{{user_points}}</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="stat mt-2 has-background-danger">
        <div class="level is-mobile">
          <div class="level-left">
            <img height="45" width="45" src="@/assets/rbx.svg" />
          </div>
          <div class="level-right">
            <div class="level-item has-text-right">
              <div>
                <span class="heading has-text-white has-text-weight-normal">
                  Groups Stock
                </span>
                <span class="title heading is-4 has-text-white has-text-weight-normal">
                  <div v-if="site_stock == -1" class="lds-dual-ring"></div>
                  <div v-else>{{site_stock}}</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="stat mt-2 has-background-primary">
        <div class="level is-mobile">
          <div class="level-left">
            <img height="45" width="45" src="@/assets/point_white_primary_arrow.svg" />
          </div>
          <div class="level-right">
            <div class="level-item has-text-right">
              <div>
                <span class="heading has-text-white has-text-weight-normal">
                  Vip Stock
                </span>
                <span class="title heading is-4 has-text-white has-text-weight-normal">
                  <div v-if="awaiting_payout == -1" class="lds-dual-ring"></div>
                  <div v-else>{{awaiting_payout}}</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
      user_points: -1,
      site_stock: -1,
      awaiting_payout: -1
    }
  },
  computed: {
    ...mapState({
      errorMessage: (state) => state.user.errorMessage
    })
  },
  methods: {
    setup() {
      var that = this;
      that.user_points = this.$store.state.user.user.points;

      this.$store.dispatch({
        type: 'withdraw/stats',
        callback: (stats_object) => {
          that.site_stock = stats_object.site_stock;
          that.awaiting_payout = stats_object.site_vip_stock;
        }
      });
    },
    displaySimplePopup(){
      // Use Sweetalert
      this.$swal('Welcome to Vuejs Application using Sweetalert');
    }
  },
  async mounted() {
    this.setup();
   // var that = this;
    setTimeout(function(){
      //that.displaySimplePopup();
    }, 5000);
  },
}

</script>

<style>
.lds-dual-ring {
  display: inline-block;
  width: 1.875rem;
  height: 1.875rem;
}
.lds-dual-ring:after {
  content: " ";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.1275rem;
  border-radius: 50%;
  border: 0.14rem solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
