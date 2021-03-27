<template>
  <div class="mx-2">
    <GoogleReCaptcha />
    <b-button
      expanded
      class="button-enter-giveaway"
      type="is-success">
        Enter Giveaway
      </b-button>
  </div>
</template>

<script>
import GoogleReCaptcha from '@/components/layout/security/GoogleReCaptcha'

export default {
  components: {
    GoogleReCaptcha
  }  
}
</script>

<style lang="scss" scoped>
button {
  &.button-enter-giveaway {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .1rem;
    padding: .8rem;
  }
}
</style>