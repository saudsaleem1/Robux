<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container">
      <div class="columns is-flex is-justify-content-center m-0">
        <div class="column is-4">
          <RewardRefreshTimer />
        </div>
      </div>
      <div class="columns d-flex is-justify-content-center is-align-items-center m-0">
        <div class="column is-6">
          <p class="title heading is-4 has-text-centered">
            Tasks Available!
          </p>
          <div class="box">
            <Task v-for="task in [{id: 1}, {id: 2}, {id: 3}]" :key="task.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RewardRefreshTimer from '@/components/reward/RewardRefreshTimer'
import Task from '@/components/reward/Task'

export default {
  components: {
    RewardRefreshTimer,
    Task
  }
}
</script>