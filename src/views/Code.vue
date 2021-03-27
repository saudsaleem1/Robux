<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container px-2">
      <div class="columns is-flex is-align-items-center is-justify-content-center m-0">
        <div class="column is-8">
          <b-message title="Where To Find Codes?" type="is-danger" has-icon :closable="false">
            Join our <a>discord server</a> to be notified when new codes get dropped! 🔥
          </b-message>
        </div>
      </div>
      <div class="columns mt-5 is-flex is-align-items-center is-justify-content-center m-0">
        <div class="column is-8">
          <ClaimCodeForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClaimCodeForm from '@/components/code/ClaimCodeForm'

export default {
  components: {
    ClaimCodeForm,
  }
}
</script>