<template>
  <div class="task">
    <span class="heading m-0 title is-6">
      Complete 3 Offers To Win 5 Points!
    </span>
    <div class="mt-1">
      <div class="columns is-flex is-align-items-center m-0">
        <div class="column py-1 p-0">
          <b-progress
            type="is-danger"
            format="percent"
            :value="43"
            show-value />
        </div>
      </div>
    </div>
    <div class="columns is-mobile m-0 is-flex is-justify-content-flex-end">
      <div class="column is-flex is-4 py-1 p-0">
        <b-button
          expanded
          type="is-success"
          size="is-small">
            Claim Prize
        </b-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task {
  margin: 10px 0;
}
</style>