<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container" v-if="!timeUp">
      <div class="columns is-flex is-justify-content-center m-0">
        <div class="column is-4">
          <RewardRefreshTimer />
        </div>
      </div>
      <div
        class="columns d-flex is-justify-content-center is-align-items-center m-0"
      >
        <div class="column is-6">
          <p class="title heading is-4 has-text-centered">Tasks Available!</p>
          <div class="box">
            <!-- <Task v-for="task in [{id: 1}, {id: 2}, {id: 3}]" :key="task.id" /> -->
              <b-loading :is-full-page="false" v-model="isLoading" :can-cancel="true" v-if="isLoading">
                <b-icon
                    pack="fas"
                    icon="sync-alt"
                    size="is-small"
                    custom-class="fa-spin"
                    type="is-info">
                </b-icon>
            </b-loading>
            <Task  />
          </div>
        </div>
      </div>
    </div>
    <h1 v-else class="title heading is-4 has-text-centered">TIMES UP</h1>
  </div>
</template>

<script>
import RewardRefreshTimer from "@/components/reward/RewardRefreshTimer";
import Task from "@/components/reward/Task";
import axios from "axios";
import { EventBus } from "@/main.js";
import { mapGetters } from "vuex";
const BASE_API = "http://138.197.72.113/api/rewards/";
export default {
  components: {
    RewardRefreshTimer,
    Task,
  },
  data() {
    return {
      statsObject: {},
      timeLeft: null,
      timeUp: false,
      isLoading:false
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
  methods: {
    //get reward stats by calling stats API
    getRewardStats() {
      this.isLoading = true
      axios
        .post(`${BASE_API}stats`, {
          user_id: this.getUser.roblox_id,
        })
        .then((res) => {
        
          console.log(res);
          this.statsObject = res.data.tasks_array;
          this.timeLeft = res.data.time_left;
          //this emit send tasks array to task component
          EventBus.$emit("getRewardStats", this.statsObject);
          //this emit set time to countdown timer
          EventBus.$emit("getTimeLeft", this.timeLeft);
            this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err.response);
        });
    },
  },
  mounted() {
    //call count time API when user navigate to this page
    this.getRewardStats();
  },
  created() {
    //this listner listen timout event and show "TIMES UP" on scren
    EventBus.$on("timeout", () => {
      this.timeUp = true;
    });
    //this listner again call get reward stats API
    EventBus.$on("getRewardStat", () => {
      this.getRewardStats();
      this.timeUp = false;
    });
  },
};
</script>