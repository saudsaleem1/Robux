<template>
  <div>
    <NavBar/>
    <transition
      name="fade"
      mode="out-in"
    >
    <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/layout/app/NavBar'

export default {
  components: {
    NavBar,
  }
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition-duration: .5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
