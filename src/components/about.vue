<template>
  <nav>
    <div class="jumbotron">
      <h1 class ="display-5">Developer Team</h1>
      <hr class ="my-4">
      <strong>{{ message }}</strong>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: "about",
  data (){
    return{
      message: 'Cannot connect to Flask server'
    }
  },
  methods: {
    getMessage() {
       var path = 'http://192.168.0.25:5000/about'
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
   h1{
     color: #5b42b9;
     font-size: 70 px;
     font-weight: bold;
   }
   strong{
     color: #711616;
     text-align: center;
   }
</style>
