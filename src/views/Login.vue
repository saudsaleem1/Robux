<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container">
      <div class="columns d-flex is-justify-content-center is-align-items-center m-0">
        <div class="column is-6">
          <b-notification
            v-if="errorMessage !== null"
            type="is-danger"
            aria-close-label="Close notification"
            role="alert">
              {{ errorMessage }}
          </b-notification>
          <div class="box">
            <span class="title is-5 heading">
              Login
            </span>

            <b-field label="Enter Username">
              <b-input
                v-model="username"
                placeholder="Username"
                required
                type="text"/>
            </b-field>

            <b-button
              @click="doLogin"
              :disabled="pending"
              expanded
              type="is-success">
                Login
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      username: '',
      pending: false,
    }
  },
  computed: {
    ...mapState({
      errorMessage: (state) => state.user.errorMessage
    })
  },
  beforeMount() {

  },
  methods: {
    doLogin() {
      this.pending = true;

      if (this.username.length < 3 || this.username.length > 20) {
        this.$store.commit('user/SET_ERROR', 'Username must be between 3 and 20 characters long.')

        this.pending = false
        return
      }

      this.$store.dispatch('user/authenticate', this.username);

      this.pending = false;
    }
  }
}
</script>
