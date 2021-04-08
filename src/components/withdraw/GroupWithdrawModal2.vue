<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <h1>Click here to join group</h1>
      </header>
      <section
        class="modal-card-body is-flex-direction-row is-justify-content-center"
      >
        <figure class="image is-128x128 ml-6">
          <img :src="getGroupData.group_url" />
        </figure>
      </section>
    </div>
    <footer
      class="modal-card-foot is-flex-direction-row is-justify-content-center"
    >
      <b-button
        label="I'VE JOINED WITHDRAW!"
        @click="
        $emit('close');
          joinWithdraw();
          
        "
        type="is-primary"
      />
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "@/main.js";
import { mapGetters } from "vuex";
const BASE_API = "http://138.197.72.113/api/withdraw/";
export default {
  data() {
    return {
      groupObj: "",
    };
  },
  props:['amount'],
  computed: {
    ...mapGetters({
      getUser: "user/getUser",
      getGroupData: "withdraw/getGroupData",
    }),
  },
  methods: {
    joinWithdraw() {
      axios
        .post(`${BASE_API}payout`, {
          user_id: this.getUser.roblox_id,
          amount: this.amount,
        })
        .then((res) => {
          console.log("join Withdraw  ", res);
          if(res.data.error)
          {
            this.error()
          }else{this.success()}
        })
        .catch((err) => {
          this.error()
          console.log(err.response);
        });
    },
     success() {
                this.$buefy.toast.open({
                  duration: 5000,
                    message: 'Withdraw succesfully!',
                    position: 'is-bottom',
                    type: 'is-success'
                })
            },
             error() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Error occur `,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            },
  },
  mounted(){
    EventBus.$emit("closeGroupModalLoading")
  }
};
</script>