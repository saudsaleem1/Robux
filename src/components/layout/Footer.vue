<template>
  <footer class="footer has-background-white">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column is-flex is-flex-direction-column is-justify-content-center">
          <p>
            Welcome to MyBux!
          </p>
        </div>
        <div class="column is-flex is-flex-direction-column is-justify-content-center">
          <h6>
            Find Us On
          </h6>
          <ul>
            <li>
              <a href="/aa" target="_blank">
                <b-icon
                    icon="instagram"
                    size="is-small">
                </b-icon> Instagram
              </a>
            </li>
            <li>
              <a href="/aa" target="_blank">
                <b-icon
                    icon="discord"
                    size="is-small">
                </b-icon> Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 3rem 1.5rem !important;
}
ul {
  list-style: none !important;
  margin-left: 0;
  & li {
    margin: 0 !important;
    margin-bottom: 5px !important;
  }
}
</style>
