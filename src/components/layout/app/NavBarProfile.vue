<template>
  <div class="is-flex ml-2 is-align-items-center is-justify-content-center">
    <template>
      <b-image class="profile-picture mr-1" rounded v-bind:src="`https://www.roblox.com/headshot-thumbnail/image?userId=${$store.state.user.user.roblox_id}&height=110&width=110&format=png`"/>
      <span>
        {{$store.state.user.user.roblox_username}}
      </span>
    </template>
    <b-navbar-item>
      <b-button
        @click="doLogout"
        class="mx-2"
        size="is-small"
        type="is-danger">
          Logout
      </b-button>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ name: 'Withdraw' }" class="points">
      <span class="identifier">
        <img src="@/assets/point_white.svg" />
      </span>
      <span>
        {{$store.state.user.user.points}}
      </span>
    </b-navbar-item>
  </div>
</template>

<style lang="scss">
.profile-picture {
  & img {
    height: 2.5rem !important;
    width: auto !important;
  }
}
.navbar-item {
  &:hover, &:focus, &:focus-within {
    background-color: #ffffff !important;
  }
  &.points {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgb(218, 214, 214);
    &:hover {
      background-color: rgb(218, 214, 214) !important;
      color: #4a4a4a !important;
    }
    & .identifier {
      color: #ffffff;
      background-color: #3BC125;
      padding: 0 5px;
      border-radius: 5px;
      margin-right: 5px;
    }
  }
  & .navbar-link {
    &:hover, &:focus, &:focus-within {
      color: #f14668;
    }
  }
}
</style>

<script>
export default {
  methods: {
    doLogout() {
      this.$store.dispatch('user/logout');
    }
  }
}
</script>
