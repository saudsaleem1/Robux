<template>
  <div class="mb-2">
    <div v-if="!showWinner">
      <h2 class="title is-5 m-0">Giveaway Will End In</h2>
      <div class="columns is-mobile d-flex is-justify-content-center timers">
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
    <div v-else>
      <h2 class="title is-5 m-0">Winner</h2>
      <div class="is-flex-direction-row is-justify-content-center">
        <h1 class="title is-5 m-0">
          {{ "Name: " }}{{ winnerObject.user_name }}
        </h1>
        <h1 class="title is-5 m-0">
          {{ "Winnings: " }}{{ winnerObject.user_winnings }}
        </h1>
        <b-image
          :src="winnerObject.user_image"
          alt="Winner Image"
          ratio="4by5"
        >
        </b-image>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const BASE_API = "http://138.197.72.113/api/giveaways/";
export default {
  data() {
    return {
      minutes: "00",
      seconds: "00",
      showWinner: false,
      winnerObject: {},
    };
  },
  methods: {
    //get winner by calling 'time-left' API
    getWinner() {
      axios
        .post(`${BASE_API}winner`)
        .then((res) => {
          console.log(res);
          //save winner info in local object
          this.winnerObject = res.data.winner;
          //show winner info on screen
          this.showWinner = true;
          let that = this;
          setTimeout(function () {
            //hide winner info and again call get time API after 5 minutes
            that.showWinner = false;
            that.getCountdownTime();
          }, 300000);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    //get countdown time by calling 'time-left' API
    getCountdownTime() {
      axios
        .post(`${BASE_API}time-left`)
        .then((res) => {
          console.log(res);
          let that = this;
          this.minutes = Math.ceil(res.data.seconds / 60 - 1);
          if (res.data.seconds <= 60) {
            this.seconds = res.data.seconds;
          } else {
            this.seconds = 60;
          }
          //  let time = res.data.seconds;
          let outerTimer = setInterval(function () {
            that.seconds--;
            if (that.seconds == 0) {
              that.seconds = 60;
              that.minutes--;
            }
          }, 1000);

          setTimeout(function () {
            that.seconds = 0;
            that.minutes = 0;
            clearInterval(outerTimer);
            //Call winner API after timeout
            that.getWinner();
          }, res.data.seconds * 1000);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mounted() {
    //call count time API when user navigate to this page
    this.getCountdownTime();
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
