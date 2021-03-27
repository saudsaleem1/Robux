<template>
  <div class="columns entries">
    <div class="column entry is-half-mobile" v-for="key in [{}, {}, {}]" :key="key">
      <div class="image">
        <img src="https://tr.rbxcdn.com/94651ccf6be66f341cea8eb6d49c0fb0/420/420/AvatarHeadshot/Png" />
        <img class="winner-icon" src="@/assets/winner.svg" />
      </div>
      <div class="content">
        <div class="details">
          <div>
            <p class="heading">
              User
            </p>
            <p class="heading">
              Test
            </p>
          </div>
          <div>
            <p class="heading">
              Points
            </p>
            <p class="heading is-flex is-align-items-center">
              <img class="mr-1" src="@/assets/point_success_white_arrow.svg" />5
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entries {
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
  & .entry {
    background-color: #ffffff;
    border-radius: 30px;
    position: relative;
    z-index: 10;
    transition: all .25s ease;
    margin: 0;
    &:hover {
      transform: translate(0, -5px);
      & .image {
        transform: translate(0, -5px);
      }
    }
    & .image {
      width: calc(100% - 60px);
      margin: 0 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .35s ease-out;
      & img {
        object-fit: contain;
        height: 65px;
      }
      & .winner-icon {
        height: 25px;
        position: absolute;
        bottom: 0;
        right: -30px;
      }
    }
    & .content {
      padding: 15px 0;
      & .details {
        & div {
          display: flex;
          justify-content: space-between;
          & .heading {
            margin-bottom: 3px;
          }
        }
      }
    }
  }
}
</style>
