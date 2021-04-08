<template>
  <div class="mx-2">
    <GoogleReCaptcha />
    <b-button
      expanded
      class="button-enter-giveaway"
      type="is-success"
      @click="enterGiveAway()"
    >
      Enter Giveaway
    </b-button>
  </div>
</template>

<script>
//import { EventBus } from '@/main.js';
import GoogleReCaptcha from "@/components/layout/security/GoogleReCaptcha";
import axios from "axios";
import { mapGetters } from "vuex";
const BASE_API = "http://138.197.72.113/api/giveaways/";
export default {
  components: {
    GoogleReCaptcha,
  },
  data() {
    return {
      timer: null,
    };
  },
  
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods:{
      enterGiveAway() {
      axios
        .post(`${BASE_API}winner`, {
          user_id: this.getUser.roblox_id,
        })
        .then((res) => {
          console.log(res);
          if(res.data.error){
            this.error()
          }
          else{
            this.success()
          }
        })
        .catch((err) => {
          console.log(err.response);
           this.error()
        });
    },
     success() {
                this.$buefy.toast.open({
                  duration: 5000,
                    message: 'Entered giveaway succesfully!',
                    position: 'is-bottom',
                    type: 'is-success'
                })
            },
             error() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Error occur`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            },
  }
};
</script>

<style lang="scss" scoped>
button {
  &.button-enter-giveaway {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 0.8rem;
  }
}
</style>