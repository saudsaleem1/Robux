<template>
  <b-navbar class="container">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        <h4 class="title heading">
          RBLXEarn
        </h4>
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        Home
      </b-navbar-item>
      <template>
        <b-navbar-item tag="router-link" :to="{ name: 'Earn' }">
          Earn
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Code' }">
          Codes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Withdraw' }">
          Withdraw
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Giveaway' }">
          Giveaway
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Reward' }">
          Rewards
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Affiliation' }">
          Invite Friends
        </b-navbar-item>
      </template>
    </template>

    <template #end>
      <b-navbar-item v-if="!isLoggedIn">
        <b-button expanded size="is-small" tag="router-link" type="is-danger" :to="{ name: 'Login' }">
          Connect ROBLOX Account
        </b-button>
      </b-navbar-item>
      <NavBarProfile v-else />
    </template>
  </b-navbar>
</template>

<script>
import NavBarProfile from '@/components/layout/app/NavBarProfile'
import { mapGetters } from 'vuex'

export default {
  components: {
    NavBarProfile,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn'
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  &.heading {
    margin-bottom: 0;
    text-transform: none;
  }
}
.navbar-menu {
  & .navbar-item {
    &.router-link-exact-active {
      color: #f14668;
    }
    &:not(:first-child) {
      margin-left: 5px;
    }
    &:hover, &:focus, &:focus-within {
      color: #f14668;
      background-color: #ffffff;
    }
  }
}
@media screen and (max-width: 1024px) {
  .navbar-menu {
    & .navbar-start {
      & .navbar-item {
        margin: 0 !important;
      }
    }
  }
}
</style>
