<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <h1>Change this games VIP server price to R$ 1400</h1>
      </header>
      <section
        class="modal-card-body is-flex-direction-row is-align-items-center"
      >
        <img :src="getGameData.game_url" class="is-align-self-center" />
      </section>
      <footer
        class="modal-card-foot is-flex-direction-row is-justify-content-center"
      >
        <b-button
          label="Help"
          @click="
          $emit('close');
            openHelpModal();
            
          "
        />
        <b-button
          label="WITHDRAW"
          @click="
            $emit('close');
            gameWithdraw();
          
          "
          type="is-primary"
        />
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { EventBus } from "@/main.js";
const BASE_API = "http://138.197.72.113/api/withdraw/";
export default {
  data() {
    return {};
  },
  props:['amount'],
  computed: {
    ...mapGetters({
      getUser: "user/getUser",
      getGameData: "withdraw/getGameData",
    }),
  },
  methods: {
    gameWithdraw() {
      axios
        .post(`${BASE_API}payout-vip`, {
          user_id: this.getUser.roblox_id,
          amount: this.amount,
        })
        .then((res) => {
          console.log("game Withdraw  ", res);
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
    openHelpModal() {
      EventBus.$emit("helpModal");
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
    EventBus.$emit("closeGameModalLoading")
  }
};
</script>