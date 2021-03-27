<template>
  <div class="mh-75 is-flex is-align-items-center is-justify-content-center">
    <div class="container">
      <div class="columns m-0 stats">
        <div class="column mt-2 is-4">
          <div class="stat has-background-success">
            <div class="level is-mobile">
              <div class="level-left">
                <img height="45" width="45" src="@/assets/point_white.svg" />
              </div>
              <div class="level-right">
                <div class="level-item has-text-right">
                  <div>
                    <span class="heading has-text-white has-text-weight-normal">
                      Commission
                    </span>
                    <span class="title heading is-4 has-text-white has-text-weight-normal">
                      30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="stat mt-2 has-background-danger">
            <div class="level is-mobile">
              <div class="level-left">
                <img height="45" width="45" src="@/assets/point_white_danger_arrow.svg" />
              </div>
              <div class="level-right">
                <div class="level-item has-text-right">
                  <div>
                    <span class="heading has-text-white has-text-weight-normal">
                      Affiliated Users
                    </span>
                    <span class="title heading is-4 has-text-white has-text-weight-normal">
                      30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns mt-5 m-0">
        <div class="column is-8">
          <AffiliationLink />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AffiliationLink from '@/components/affiliation/AffiliationLink'

export default {
  components: {
    AffiliationLink
  }
}
</script>