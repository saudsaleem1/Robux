<template>
  <div class="mb-2">
    <h2 class="title is-5 m-0">
      Giveaway Will End In
    </h2>
    <div class="columns is-mobile d-flex is-justify-content-center timers">
      <div class="column is-4">
        <div class="timer">
          30
        </div>
        <p class="has-text-centered">
          Minutes
        </p>
      </div>
      <div class="column is-4">
        <div class="timer">
          00
        </div>
        <p class="has-text-centered">
          Seconds
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  line-height: 2.125;
  text-align: center;
}
.timers {
  & .timer {
    border: 1px solid #f53964;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 26px;
  }
}
</style>
