<template>
  <div class="container mt-5">
    <b-tabs type="is-toggle" expanded>
      <b-tab-item v-for="offerWall in offerWalls" :key="offerWall.name" :label="offerWall.name">
        <iframe width="100%" height="700" :src="offerWall.frameUrl"></iframe>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offerWalls: [{
        name: 'AdGate Media',
        frameUrl: 'https://wall.adgaterewards.com/n6qYpw/'+this.$store.state.user.user.roblox_id
      },
      {
        name: 'AdGem',
        frameUrl: 'https://api.adgem.com/v1/wall?appid=2501&playerid='+this.$store.state.user.user.roblox_id
      },
      {
        name: 'OfferToro',
        frameUrl: 'https://www.offertoro.com/ifr/show/23265/'+this.$store.state.user.user.roblox_id+'/11551'
      }]
    }
  }
}
</script>

<style lang="scss">
.b-tabs {
  & .tabs {
    & ul {
      & li {
        &.is-active {
          & a {
            background-color: #f14668;
            border-color: #f14668;
          }
        }
      }
    }
  }
}
</style>
