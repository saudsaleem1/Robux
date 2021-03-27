<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container">
      <div class="columns is-flex is-justify-content-center m-0">
        <div class="column is-4">
          <GiveawayTimer />
        </div>
      </div>
      <GiveawayStats />
      <div class="columns d-flex is-align-items-center m-0">
        <div class="column is-6">
          <p class="title heading is-4 has-text-centered">
            Enter Giveaway!
          </p>
          <EnterGiveawayForm />
        </div>
        <div class="column">
          <p class="title heading is-4 has-text-centered">
            Previous Winners
          </p>
          <PreviousGiveawayWinners />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GiveawayTimer from '@/components/giveaway/GiveawayTimer'
import GiveawayStats from '@/components/giveaway/GiveawayStats'
import PreviousGiveawayWinners from '@/components/giveaway/PreviousGiveawayWinners'
import EnterGiveawayForm from '@/components/giveaway/EnterGiveawayForm'

export default {
  components: {
    GiveawayTimer,
    GiveawayStats,
    PreviousGiveawayWinners,
    EnterGiveawayForm
  }
}
</script>