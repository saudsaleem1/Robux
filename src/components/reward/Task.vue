<template>
  <div class="task" >
    <div v-for="(task,index) in tasksArray" :key="task.task_identifier">
    <span class="heading m-0 title is-6">
      Complete 3 Offers To Win 5 Points!
      {{task.title}}
    </span>
    <div class="mt-1">
      <div class="columns is-flex is-align-items-center m-0">
        <div class="column py-1 p-0">
          <b-progress
            type="is-danger"
            format="percent"
            :value="task.progress"
            show-value />
        </div>
      </div>
    </div>
    <div class="columns is-mobile m-0 is-flex is-justify-content-flex-end">
      <div class="column is-flex is-4 py-1 p-0">
          
        <b-button
          expanded
          type="is-success"
          size="is-small"
          @click="claimPrize(task,index);clickedBtn = index"
          >
          <div  v-if="isLoading && (clickedBtn == index)" class="lds-dual-ring">
            
            </div>

     <p v-else> {{task.btnTitle}} </p>
            
        </b-button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { EventBus } from '@/main.js';
import { mapGetters } from "vuex";
const BASE_API = "http://138.197.72.113/api/rewards/";
export default {
 data()
 {
   return{
tasksArray:[],
isLoading:false,
clickedBtn:null

   }
 }
 ,
 methods:{
   //this API call claim api
   claimPrize(task,index){
     this.isLoading = true;
axios
        .post(`${BASE_API}claim`, {
          user_id: this.getUser.roblox_id,
          task_identifier:task.task_identifier
        })
        .then((res) => {
          this.isLoading = false;
          console.log(res);
    this.tasksArray[index].btnTitle = 'Prize Claimed'
    this.$set(this.tasksArray, index, this.tasksArray[index])
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response);
        });
   }
 },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },

 created()
 {
   //this listner get taska array and store them to local variable
   EventBus.$on('getRewardStats',(payload)=>{
     console.log(payload)
     this.tasksArray = payload
     this.tasksArray.forEach(item=>item.btnTitle = "Claim Prize")
   })
 }
};
</script>

<style >
.task {
  margin: 10px 0;
}

.lds-dual-ring {
  display: inline-block;
  width: 1.875rem;
  height: 1.875rem;
}
.lds-dual-ring:after {
  content: " ";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.1275rem;
  border-radius: 50%;
  border: 0.14rem solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

