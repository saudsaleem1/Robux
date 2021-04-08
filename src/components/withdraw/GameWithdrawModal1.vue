<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <h1 class="title">Funds take 3-7 days to pend</h1>
      </header>
      <section class="modal-card-body">
        <p>
          These funds transferred via a VIP server purchase and it will take
          <br />3 to 7 days to reach your account
        </p>
      </section>
    </div>
    <footer
      class="modal-card-foot is-flex-direction-row is-justify-content-center"
    >
       <b-loading :is-full-page="false" v-model="isLoading" :can-cancel="true" v-if="isLoading">
                <b-icon
                    pack="fas"
                    icon="sync-alt"
                    size="is-small"
                    custom-class="fa-spin"
                    type="is-info">
                </b-icon>
            </b-loading>
     
      <b-button
      v-else
        label="I understand"
        class="ml-9"
        @click="
          gameWithdraw();
       
        "
        type="is-danger"
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
      isLoading:false,
    };
  },
  props:['amount'],
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    gameWithdraw() {
       this.isLoading = true
      axios
        .post(`${BASE_API}games`, {
          user_id: this.getUser.roblox_id,
        })
        .then((res) => {
          console.log("game withdraw step 1", res.data);
          this.isLoading = true;
          this.$store.commit("withdraw/SET_GAME_DATA", res.data.games[0]);
          EventBus.$emit("openGameModal2",this.amount);
         //  this.$emit('close');
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created()
{
  EventBus.$on("closeGameModalLoading",()=>{
    this.$emit('close');
    this.isLoading = false
  })
}
};
</script>