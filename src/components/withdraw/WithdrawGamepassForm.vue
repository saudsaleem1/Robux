<template>
  <div>
    <div v-if="isGamepassAvailable == false">
      <b-message title="Uh oh..." type="is-danger" :closable="false">
        We are out of stock for gamepass purchases at the moment, please check back in later.
        <br><br>
        To be notified when we stock back up, join our <a>Discord Server</a> and
        be the first one to claim your points!
      </b-message>
    </div>
    <div v-else-if="isAbleToWithdraw == false">
      <b-message title="Uh oh..." type="is-danger" :closable="false">
        In order to convert your points to robux you need to complete at least one offer.
        <br><br>
        You can do that on the <a>Earn Page</a> or if you're having issues go to our <a>Discord Server</a> and
        get help from our staff!
      </b-message>
    </div>
    <div v-else>
      <b-field label="Enter Points">
        <b-input placeholder="Points" v-model="vipWithdrawal" required min="10" max="250" type="number"></b-input>
      </b-field>

      <b-button v-on:click="withdrawGamepassPopupFirst" expanded type="is-primary">
        Continue
      </b-button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
      isGamepassAvailable: true,
      isAbleToWithdraw: true,
      isInGroup: true,
      // Withdrawal Values
      vipWithdrawal: 10,
      groupWithdrawal: 5,
      user_games: [],
    }
  },
  computed: {
    ...mapState({
      errorMessage: (state) => state.user.errorMessage
    })
  },
  methods: {
    async selectGame(game_id){
      console.log(game_id)
    },
    async buildGamesModal(games) {
      var html = ``;
      console.log(html)
      for(var i = 0; i < games.length; i++){
        html+=`
        <div class = "owned-games-container">
          <div class = "owned-games-header">
          ${games[i].name}
          </div>
          <div class = "owned-games-image-container">
            <img src = "${games[i].game_url}"/>
          </div>
        </div>
        `;
      }
    },
    async doGetGames(that) {
     // var that = this;

      await this.$store.dispatch({
        type: 'withdraw/games',
        user_id: this.$store.state.user.user.roblox_id,
        callback: (response) => {
          if(response.error == true){
            // Open error popup
            this.$swal(response.message);
          }else{
            // Show users the games so they can pick one
            that.user_games = response.games;
            var chooseGameModal = this.buildGamesModal(response.games);
            console.log(chooseGameModal)
            this.$swal.insertQueueStep(JSON.stringify(response.games))
          }
        }
      });
    },
    withdrawGamepassPopupFirst(){
      if(this.vipWithdrawal > 9 && this.vipWithdrawal < 251){
        // Use Sweetalert
        this.$swal.mixin({
          input: 'text',
          showCancelButton: true
        }).queue([
          {
            title: 'Funds take 3-7 days to pend',
            confirmButtonText: 'I understand',
            text:'These funds are transferred via a VIP server purchase and it will take 3 to 7 days to reach your account!',
            showLoaderOnConfirm: true,
            preConfirm: () => {
              var that = this;
              return this.doGetGames(that)
            }
          }
        ]);
      }
    },
    displaySimplePopup(){
      if(this.vipWithdrawal > 9 && this.vipWithdrawal < 251){
        // Use Sweetalert
        this.$swal.mixin({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          progressSteps: ['1', '2', '3', '4']
        }).queue([
          {
            title: 'Funds take 3-7 days to pend',
            text: 'These funds are transferred via a VIP server purchase and it will take 3 to 7 days to reach your account!'
          },
          {
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:'Your public IP will be received '+'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: () => {
              return fetch()
                .then(response => response.json())
                .then(data => this.$swal.insertQueueStep(data.ip))
                .catch(() => {
                  this.$swal.insertQueueStep({
                    icon: 'error',
                    title: 'Unable to get your public IP'
                  })
                })
            }
          },
          {
            title: 'Please select one of your games',
            text: 'List games here'
          },
          {
            title: '<strong>Set VIP Server Price to R$1,428</strong>',
            html: `<img src = "https://cdn.discordapp.com/attachments/794732302743240744/820165896139833344/all-steps.png" />`
          },
          {
            title: 'Congratulations!',
            text: 'You have collected your earnings, be sure to earn more and cashout too!'
          }
        ]);
      }
    }
  },
  async mounted() {

  },
}
</script>

<style>

.swal2-popup {
  width: 40em !important;
}

</style>
