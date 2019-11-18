<template>
  <nav>
     <div class ="jumbotron">
       <h1 class = "display-4" >Welcome to Raspberry pi Heartbeat Sensor interface</h1>
       <strong>Connection Status</strong>
         <p class ="lead">{{ message }}</p>
         <hr class = "my-4">
         <strong> Learn about to Raspberry pi and arduino comunication </strong>
         <p> </p>
         <strong> Authors : Vicente yah , David Mendoza ,Ángel Can and Diego Uh </strong>
           <p> </p>
          <button class="btn btn-primary btn-lg" @click="$router.push('/data')">Get Started</button>

      </div>
  </nav>

</template>

<script>
import axios from 'axios'

export default {
  name: "home",
  data(){
    return{
      message: 'without message'
    }
  },
  methods: {
    getMessage() {
      const path = 'http://192.168.0.25:5000/home'
      axios.get(path).then((res)=>{
        this.message = res.data
      }).catch((err)=>{
          throw err
      })
    }
  },
  created() {
    //do something after creating vue instance
    this.getMessage()
  }
}
</script>
<style scoped>
   p{
     color: #37de51;
     font-size: 80 px;
   }
   nav{
     text-align: center;
     text-decoration-color: greenyellow;
   }
</style>
