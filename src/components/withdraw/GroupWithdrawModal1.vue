<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <h1 class="title">You must be in group 4-7 days</h1>
      </header>
      <section class="modal-card-body">
        <p>
          Due to Roblox limitations, you'll have to be in the group between 4-
          <br />7 days to receive instant payment from the group!
        </p>
      </section>
    </div>
    <footer
      class="modal-card-foot is-flex-direction-row is-justify-content-center"
    >
   <!-- <b-loading :is-full-page="false" v-model="isLoading" :can-cancel="true" v-if="isLoading"></b-loading > -->
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
          groupWithdraw();
        
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
    groupWithdraw() {
      this.isLoading = true
      axios
        .post(`${BASE_API}group`, {
          user_id: this.getUser.roblox_id,
        })
        .then((res) => {
          
          console.log("withdraw step 1", res.data);
          this.$store.commit("withdraw/SET_GROUP_DATA", res.data.group);
          
           EventBus.$emit("openGroupModal2",this.amount);
            // this.$emit('close');
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    
  },
created()
{
  EventBus.$on("closeGroupModalLoading",()=>{
    this.$emit('close');
    this.isLoading = false
  })
}
};
</script>