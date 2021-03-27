<template>
  <div class="is-flex is-justify-content-center my-3">
    <VueRecaptcha sitekey="6LdjhdMZAAAAAN6pnJB5Dbkt_eSeIorkep-u-MYw" :loadRecaptchaScript="true" />
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: { 
    VueRecaptcha
   }
}
</script>