<template>
  <div>
    <router-view class="mh-75"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Footer,
  }
}
</script>

<style lang="scss">
div {
  &.mh-75 {
    min-height: 74vh !important;
  }
  &.w-100 {
    width: 100% !important;
  }
}
section {
  &.section {
    padding: 0;
    & .container {
      height: 100%;
    }
    &.bg-gradient {
      height: 400px;
      background: linear-gradient(-90deg, #02203c ,#001528);
    }
  }
}
.stats {
  width: 100%;
  & .column {
    padding: 0 .5rem;
  }
  & .stat {
    border-radius: 4px;
    padding: 15px;
  }
}
.control {
  input {
    &.input {
      height: 56px;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      &:focus {
        border-color: #f14668;
        box-shadow: none !important;
      }
    }
  }
  &.has-icons-right {
    & .icon {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
.label {
  font-weight: normal !important;
}
.button {
  font-weight: 500;
  font-size: 1rem;
  &:focus, &.is-focused {
    &:not(:active) {
      box-shadow: none !important;
    }
  }
}
</style>
