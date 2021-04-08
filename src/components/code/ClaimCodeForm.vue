<template>
  <div>
    <b-notification
      v-if="errorMessage !== null"
      type="is-danger"
      aria-close-label="Close Notification"
      role="alert"
    >
      {{ errorMessage }}
    </b-notification>

    <b-field label="Enter Promo Code">
      <b-input
        v-model="code"
        placeholder="Enter The Code Here"
        type="text"
        required
      />
    </b-field>
 
    <b-button @click="acceptCode" expanded type="is-danger" >
       <div  v-if="isLoading" class="lds-dual-ring">
            
            </div>

     <p v-else> Accept Code </p>
    </b-button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
const BASE_API = "http://138.197.72.113/api/codes/";
export default {
  data() {
    return {
      code: "",
      errorMessage: null,
      isLoading:false
    };
  },
  methods: {
    acceptCode() {
      this.isLoading = true;
      axios
        .post(`${BASE_API}promo`, {
          user_id: this.getUser.roblox_id,
          promo: this.code,
        })
        .then((res) => {
          
          console.log(res);
         if(res.data.error){
           this.error()
         }else{
           this.success()
         }
         this.isLoading = false
        })
        .catch((err) => {
          console.log(err.response);
           this.error()
           this.isLoading = false
          this.errorMessage = err.response.data.message;
          console.log(this.errorMessage);
        });
    },
      success() {
                this.$buefy.toast.open({
                  duration: 3000,
                    message: 'Code accepted succesfully!',
                    position: 'is-bottom',
                    type: 'is-success'
                })
            },
             error() {
                this.$buefy.toast.open({
                    duration: 3000,
                    message: `Error occur `,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            },
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
  },
};
</script>
<style>
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
