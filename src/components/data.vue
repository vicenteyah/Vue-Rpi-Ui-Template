<template>
  <nav>
    <div class="jumbotron">
       <h1>To Use the heartbeat sensor</h1>
        <strong> Please click on button below</strong>
        <p> </p>
        <p> </p>
        <button class ="btn btn-primary btn-lg" @click.prevent="getSignals"> Use pulse Sensor </button>
        <p> </p>
        <p> {{ msg }}</p>
      </div>

  </nav>
</template>


<script>
import axios from 'axios'
export default {
  name: "app",
  data() {
    return{
       msg:'sensor response'
      }
    },
    methods: {
       getSignals() {
        var path = 'http://192.168.0.33:5000/data'
        axios.get(path).then((res)=>{
          this.msg = res.data
        }).catch((err)=>{
          throw err
        })
      }
    },

  }
</script>
<style scoped>
   h1{
     color: #f3311a;
     font-size: 80 px;
     font-weight: bold;
   }
   h2{
     color: #02272c;
     font-size: 80 px;
     font-weight: bold;
   }
   nav{
     text-align: center;
     text-decoration-color: greenyellow;
   }
   p{
     color: #02272c;
   }
</style>
