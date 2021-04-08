<template>
  <div class="mb-2">
    <div>
      <h2 class="title is-5 m-0">Rewards Will Be Refreshed In</h2>
      <div class="columns is-mobile d-flex is-justify-content-center timers">
        <div class="column is-4">
          <div class="timer">
            {{ hours }}
          </div>
          <p class="has-text-centered">Hours</p>
        </div>
        <div class="column is-4">
          <div class="timer">
            {{ minutes }}
          </div>
          <p class="has-text-centered">Minutes</p>
        </div>
        <div class="column is-4">
          <div class="timer">
            {{ seconds }}
          </div>
          <p class="has-text-centered">Seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from "@/main.js";
export default {
  data() {
    return {
      hours: "00",
      minutes: "00",
      seconds: "00",
      timeLeft: null,
      totalSeconds: null,
    };
  },
  methods: {
    //this methods takes seconds as argument and convert them into hours,minutes,seconds
    calculateHMS(totalSeconds) {
      this.hours = Math.abs(Math.ceil(totalSeconds / 3600 - 1));
      totalSeconds = Math.abs(this.hours * 3600 - totalSeconds);
      this.minutes = Math.abs(Math.ceil(totalSeconds / 60 - 1));
      totalSeconds = Math.abs(this.minutes * 60 - totalSeconds);
      this.seconds = totalSeconds;
    },
    //this method start countdoen timer
    startCountdown() {
      let that = this;
      let outerTimer = setInterval(function () {
        that.seconds--;
        if (that.seconds == 0) {
          that.totalSeconds = Math.abs(that.totalSeconds - 60);
          that.calculateHMS(that.totalSeconds);
        }
      }, 1000);

      setTimeout(function () {
        that.hours = 0;
        that.seconds = 0;
        that.minutes = 0;
        clearInterval(outerTimer);
        EventBus.$emit("timeout");
        //Call get rewards set API
        that.againGetRewardStats();
      }, that.timeLeft * 1000);
    },
    //send emit to parent to again  call rewards set API  (after 5 minutes delay)
    againGetRewardStats() {
      setTimeout(function () {
        EventBus.$emit("getRewardStat");
      }, 300000);
    },
  },
  created() {
    //this listner lisned for time left event and store time in local variable
    EventBus.$on("getTimeLeft", (payload) => {
      this.timeLeft = payload;
      this.totalSeconds = payload;
      this.calculateHMS(this.totalSeconds);
      this.startCountdown();
    });
  },
};
</script>

<style lang="scss" scoped>
.title {
  line-height: 2.125;
  text-align: center;
}
.timers {
  & .timer {
    border: 1px solid #f53964;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 26px;
  }
}
</style>
