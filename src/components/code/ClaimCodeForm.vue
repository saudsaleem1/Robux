<template>
  <div>
    <b-notification
      v-if="errorMessage !== null"
      type="is-danger"
      aria-close-label="Close Notification"
      role="alert">
        {{ errorMessage }}
    </b-notification>
    
    <b-field label="Enter Promo Code">
      <b-input
        v-model="code"
        placeholder="Enter The Code Here"
        type="text"
        required />
    </b-field>

    <b-button
      @click="acceptCode"
      expanded
      type="is-danger">
        Accept Code
    </b-button>
  </div>
</template>

<script>
import axios from 'axios'
const CODE_BASE_API = '/code'

export default {
  data() {
    return {
      code: '',
      errorMessage: null
    }
  },
  methods: {
    acceptCode() {
      axios.post(`${CODE_BASE_API}/accept`, {
        Name: this.code
      }).then(res => {
        this.$buefy.toast.open({
          message: res.data.message,
          type: 'is-success',
          position: 'is-bottom-right',
          duration: 5000
        })
      })
      .catch(err => {
        this.errorMessage = err.response.data.message
      })
    }
  }
}
</script>