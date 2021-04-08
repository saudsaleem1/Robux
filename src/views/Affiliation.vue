<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container">
      <div class="columns m-0 stats">
        <div class="column mt-2 is-4">
          <div class="stat has-background-success">
            <div class="level is-mobile">
              <div class="level-left">
                <img height="45" width="45" src="@/assets/point_white.svg" />
              </div>
              <div class="level-right">
                <div class="level-item has-text-right">
                  <div>
                    <span class="heading has-text-white has-text-weight-normal">
                      Commission
                    </span>
                   
                    <span  class="title heading is-4 has-text-white has-text-weight-normal">
                        <div   v-if="isLoading" class="lds-dual-ring">
              
            </div>
                    <p v-else>  {{commistion}} </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="stat mt-2 has-background-danger">
            <div class="level is-mobile">
              <div class="level-left">
                <img height="45" width="45" src="@/assets/point_white_danger_arrow.svg" />
              </div>
              <div class="level-right">
                <div class="level-item has-text-right">
                  <div>
                    <span class="heading has-text-white has-text-weight-normal">
                      Affiliated Users
                    </span>
                    
                    <span class="title heading is-4 has-text-white has-text-weight-normal">
                       <div v-if="isLoading" class="lds-dual-ring">
               
            </div>
                    <p v-else>  {{affiliatedUsers}}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns mt-5 m-0">
        <div class="column is-8">
          <AffiliationLink />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AffiliationLink from '@/components/affiliation/AffiliationLink'
import axios from "axios";
import { EventBus } from '@/main.js';
import { mapGetters } from "vuex";
const BASE_API = "http://138.197.72.113/api/commission/";
export default {
  components: {
    AffiliationLink
  },
   data() {
    return {
    commistion:"",
    affiliatedUsers:"",
    isLoading:false,
    userLoading:false
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    //get Commision stats by calling Commision stats API
    getCommisionStats() {
      this.isLoading = true;
      axios
        .post(`${BASE_API}stats`, {
          user_id: this.getUser.roblox_id
        }).then(res=>{
          this.isLoading = false
          console.log("commision stats",res.data)
          this.commistion = res.data.commission
          this.affiliatedUsers = res.data.affiliated_users
          EventBus.$emit('affiliationLink',res.data.affiliate_link)
        }).catch(err=>{this.isLoading = false;console.log(err.response)})
  }
  },
  mounted()
  {
    this.getCommisionStats()
  }
}
</script>
<style >
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