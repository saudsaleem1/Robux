<template>
  <div>
    <section class="bg-banner">
      <div class="container is-flex is-justify-content-center is-align-items-center">
        <div class="columns m-0">
          <div class="column
            is-flex
            is-full-desktop
            is-half-widescreen
            is-full-tablet
            is-flex-direction-column
            is-justify-content-center
            is-align-items-center">
              <h1 class="title">
                RBLXEarn
              </h1>
              <p class="description">
                <strong style = "color: #fff">The ultimate resource to get fast and easy robux.</strong>
              </p>
              <b-button
                tag="router-link"
                :to="{ name: 'Login' }"
                type="is-primary">
                  Get Started
              </b-button>
          </div>
          <div class="column
            is-flex
            is-justify-content-center
            is-align-items-center">
              <img src="@/assets/angel.png" />
          </div>
        </div>
      </div>
    </section>

    <div class="columns m-0 home-stats stats has-text-centered">
      <div class="column home-stat has-background-danger">
        <h1 class="title has-text-danger-light">
          250,000<small>+</small> Robux Paid
        </h1>
      </div>
      <div class="column home-stat has-background-danger">
        <h1 class="title has-text-danger-light">
          8,000<small>+</small> Users
        </h1>
      </div>
    </div>
    <div class="container">
      <!-- <div class="columns m-0">
        <div class="column is-6">
          <b-message title="How To Get Started" type="is-success" :closable="false">
            All you need is a username and some free time to start earning. Once you've logged in go to the <router-link to="/earn" tag="a">Earn</router-link> page.
          </b-message>
        </div>
        <div class="column is-6">
          <b-message title="How To Get Started" type="is-danger" has-icon :closable="false">

          </b-message>
        </div>
      </div> -->
      <div class="columns m-0 mt-5 steps">
        <div class="column step">
          <div class="image">
            <img src="@/assets/step-1-characters.svg">
          </div>
          <div class="content">
            <h3 class="heading">
              1. Sign Up
            </h3>
            <p>
              All you need is your username!
            </p>
          </div>
        </div>
        <div class="column step">
          <div class="image">
            <img src="@/assets/step-2-complete.svg">
          </div>
          <div class="content">
            <h3 class="heading">
              2. Complete Surveys
            </h3>
            <p>
              Some surveys only take minutes!
            </p>
          </div>
        </div>
        <div class="column step">
          <div class="image">
            <img src="@/assets/step-3-funds.svg">
          </div>
          <div class="content">
            <h3 class="heading">
              3. Claim!
            </h3>
            <p>
              Cashout your robux instantly!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1204px){
  section {
    &.bg-banner {
      & img {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1407px){
  section {
    &.bg-banner {
      & img {
        width: auto !important;
      }
    }
  }
}
section {
  &.bg-banner {
    height: 45vh;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    position: relative;
    z-index: 0;
    box-shadow: inset 0 0 100px #000000;
    background-image: url("~@/assets/bg.png");
    & img {
      width: calc(100% - 141px);
    }
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      content: '';
      opacity: .9;
      background-color: rgba(26, 31, 36, 0.5);
    }
    & .container {
      height: 100%;
      & .button {
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: .1rem;
        padding: 1.5rem 3rem;
      }
      & .columns {
        width: 100%;
      }
      & .title {
        font-size: 60px;
        font-weight: 700;
        line-height: 70px;
        margin-bottom: 22px;
        color: #ffffff;
        font-weight: normal;
        line-height: 1.3;
      }
      & .description {
        font-size: 20px;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 30px;
      }
    }
  }
}
.home-stats {
  & .home-stat {
    padding: 20px;
  }
}
.steps {
  padding-right: 50px;
  padding-left: 60px;
  scroll-behavior: smooth;
  text-align: center;
  &::after {
    content: '';
    display: block;
    min-width: 20px;
    height: 100px;
    position: relative;
  }
  &::-webkit-scrollbar {
    height: 0;
  }
  & .step {
    width: 300px;
    min-width: 380px;
    height: auto;
    background-color: #ffffff;
    border-radius: 30px;
    position: relative;
    z-index: 10;
    min-height: 356px;
    transition: all .25s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
      transform: translate(0, -10px);
      & .image {
        transform: rotate(5deg) translate(0, -15px);
      }
    }
    & .image {
      width: calc(100% - 60px);
      margin: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .35s ease-out;
      & img {
        object-fit: contain;
        height: auto;
      }
    }
    & .content {
      padding: 15px;
      & p {
        margin-top: 10px;
        opacity: .6;
        font-size: 14px;
      }
    }
  }
}
</style>
