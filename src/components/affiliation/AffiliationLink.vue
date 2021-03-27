<template>
  <div>
    <b-field label="Your Unique Affiliation Link">
      <b-input
      placeholder="Affiliation Url"
      :value="affiliationLink"
      readonly
      type="text" />
    </b-field>

    <div class="columns">
      <div class="column is-flex is-justify-content-flex-end">
        <b-button @click="copyAffiliationLink" type="is-success">
          Copy Affiliation Link
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ToastProgrammatic as Toast } from 'buefy'

export default {
  data() {
    return {
      affiliationLink: 'https://mybux.com/r/128ffdef'
    }
  },
  methods: {
    copyAffiliationLink: function () {
      this.$copyText(this.affiliationLink).then(() => {
        Toast.open({
          message: 'Copied your affiliation link, now go share it with your friends!',
          position: 'is-bottom-right',
          type: 'is-success',
          duration: 5000
        })
      })
    }
  }
}
</script>