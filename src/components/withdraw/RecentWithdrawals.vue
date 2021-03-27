<template>
  <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
    <div class="columns mb-0 entries">
      <div class="column is-half-mobile entry" v-for="withdrawal in recentWithdrawalList" :key="withdrawal.id" transition="withdrawal">
        <div class="image">
          <img src="https://tr.rbxcdn.com/94651ccf6be66f341cea8eb6d49c0fb0/420/420/AvatarHeadshot/Png">
        </div>
        <div class="content">
          <div class="details">
            <div>
              <p class="heading">
                User
              </p>
              <p class="heading">
                {{ withdrawal.username }}
              </p>
            </div>
            <div>
              <p class="heading">
                Points
              </p>
              <p class="heading is-flex is-align-items-center">
                <img class="mr-1" src="@/assets/point_success_white_arrow.svg" />{{ withdrawal.points }}
              </p>
            </div>
            <div>
              <p class="heading">
                Date
              </p>
              <p class="heading">
                {{ withdrawal.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      recentWithdrawalList: [{
        id: 1,
        username: 'hi',
        points: 5,
        date: '5m ago'
      },
      {
        id: 2,
        username: 'hi',
        points: 5,
        date: '5m ago'
      },
      {
        id: 3,
        username: 'hi',
        points: 5,
        date: '5m ago'
      }],
    }
  },
  mounted() {
    setInterval(() => {
      this.recentWithdrawalList = this.recentWithdrawalList.slice(1);
      this.recentWithdrawalList.push({
        id: Math.random() * (9999 - 1111) + 1111,
        username: `Test${Math.round(Math.random() * (5 - 1) + 1)}`,
        points: Math.round(Math.random() * (5 - 1) + 1),
        date: '5m ago',
      });
    }, 5000);
  }
}
</script>

<style lang="scss">
.entries {
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
    z-index: 10;
    transition: all .5s ease;
    display: inline-block;
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
    }
    & .content {
      padding: 15px;
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
.progress-wrapper {
  & .progress-value {
    color: rgba(0, 0, 0, 0.7) !important;
  }
}
</style>
