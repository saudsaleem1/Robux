<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container">
      <WithdrawStats />
      <div class="columns m-0">
        <div class="column">
          <p class="heading has-text-centered">Minimum Group Withdraw Amount</p>
          <div class="is-flex is-justify-content-center">
            <b-tag class="exchange-rate heading px-6" type="is-danger">
              <span class="exchange-rate-span"> {{ group_min }} Robux </span>
            </b-tag>
          </div>
        </div>
        <div class="column">
          <p class="heading has-text-centered">Minimum VIP Withdraw Amount</p>
          <div class="is-flex is-justify-content-center">
            <b-tag class="exchange-rate heading px-6" type="is-primary">
              <span class="exchange-rate-span"> {{ vip_min }} Robux </span>
            </b-tag>
          </div>
        </div>
      </div>
      <div class="columns m-0">
        <div class="column">
          <p
            class="title heading is-4 has-text-centered"
            style="margin: 0px !important"
           
          >
            Group Withdraw
          </p>
          <p class="has-text-centered" style="margin: 1.5rem">
            <small>
              Instantly paid but must be within group for 3-7 days prior to
              withdrawal.
            </small>
          </p>
          <WithdrawForm />
        </div>
        <div class="column">
          <p
            class="title heading is-4 has-text-centered"
            style="margin: 0px !important"
           
          >
            Gamepass Withdraw
          </p>
          <p class="has-text-centered" style="margin: 1.5rem">
            <small> Instantly paid but then will pend for 3-7 days. </small>
          </p>
          <WithdrawGamepassForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WithdrawStats from "@/components/withdraw/WithdrawStats";
//import RecentWithdrawals from '@/components/withdraw/RecentWithdrawals'
import WithdrawForm from "@/components/withdraw/WithdrawForm";
import WithdrawGamepassForm from "@/components/withdraw/WithdrawGamepassForm";

import GroupWithdrawModal2 from "@/components/withdraw/GroupWithdrawModal2";
import GameWithdrawModal2 from "@/components/withdraw/GameWithdrawModal2";
import HelpModal from "@/components/withdraw/HelpModal";
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      group_min: 5,
      vip_min: 10,
    };
  },
  components: {
    WithdrawStats,
    WithdrawForm,
    WithdrawGamepassForm,
    //  GroupWithdrawModal1,
    // RecentWithdrawals
  },
  methods: {
    openModal1() {
      EventBus.$emit("openModal1");
    },
   
    //open GroupWithdrawModal2
    joinWithdraw(amount) {
      this.$buefy.modal.open({
        parent: this,
        component: GroupWithdrawModal2,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        props:{amount:amount}
      });
    },
   
    //open GameWithdrawModal2
    gameWithdraw() {
      this.$buefy.modal.open({
        parent: this,
        component: GameWithdrawModal2,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
      });
    },
    //open help modal
    openHelpModal() {
      this.$buefy.modal.open({
        parent: this,
        component: HelpModal,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
      });
    },
  },
  created() {
    EventBus.$on("openGroupModal2", (amount) => {
      this.joinWithdraw(amount);
    });
    EventBus.$on("openGameModal2", (amount) => {
      this.gameWithdraw(amount);
    });
    EventBus.$on("helpModal", () => {
      this.openHelpModal();
    });
  },
};
</script>

<style lang="scss" scoped>
.exchange-rate {
  font-size: 18px !important;
}

.exchange-rate-span {
  display: flex;
  justify-content: center;
  align-items: center;
}

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
