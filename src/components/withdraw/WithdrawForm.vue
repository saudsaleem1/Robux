<template>
  <div>
    <div v-if="isGroupAvailable == false">
      <b-message title="Uh oh..." type="is-danger" :closable="false">
        We are out of stock at the moment, please check back in later.
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
    <div v-else-if="isInGroup == false">
      <b-message title="Uh oh..." type="is-danger" :closable="false">
        In order to withdraw robux you'll need to join our group!
        <br><br>
        <a>Click here</a> to be taken to the group page then refresh the page!
      </b-message>
    </div>
    <div v-else>
      <b-field label="Enter Points">
        <b-input placeholder="Points" required min="1" type="number" v-model="groupPoints"></b-input>
      </b-field>

      <b-button expanded type="is-danger"  @click="cardModal" >
        Continue 
      </b-button>
    </div>
  </div>
</template>

<script>
import GroupWithdrawModal1 from "@/components/withdraw/GroupWithdrawModal1";
export default {
components: {
   
  },
  data() {
    return {
      groupPoints:1,
      isGroupAvailable: true,
      isAbleToWithdraw: true,
      isInGroup: true
    }
  },
  methods:{
     //open GroupWithdrawModal1
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: GroupWithdrawModal1,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
        props:{
          amount:this.groupPoints
        }
      });

    },
  }
}
</script>
