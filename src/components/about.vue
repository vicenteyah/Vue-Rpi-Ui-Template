<template>
  <nav>
    <div class="jumbotron">
      <h1 class ="display-6">Developement Team</h1>
      <hr class ="my-2">
      <h3>{{ message }}</h3>

      <div class="w3-row-padding w3-center w3-margin-top">
          <div class="w3-third">
            <div class="w3-card w3-container" style="min-height:460px">
                  <h4>Please verify your connection status</h4><br>
                  <i class="fa fa-wifi w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
                  <p>This web App requires wifi connection</p>
                  <p></p>
            </div>
          </div>

          <div class="w3-third">
            <div class="w3-card w3-container" style="min-height:460px">
                  <h4>Powered by pythonFlask Server</h4><br>
                  <i class="fa fa-server w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
                  <p>Built-in Python Flask and Vuejs</p>
                  <p>Please contact us on social networks</p>
                  <a class="btn btn-social-icon btn-github" href="https://github.com/vicenteyah/Vue-Rpi-Ui-Template.git">
                     <span class="fa fa-github" style="font-size:35px"></span>
                  </a>

                  <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/angeljesus.canpech">
                     <span class="fa fa-facebook" style="font-size:35px"></span>
                  </a>
            </div>
          </div>

          <div class="w3-third">
            <div class="w3-card w3-container" style="min-height:460px">
                  <h4>Powered by pythonFlask Server</h4><br>
                  <i class="fa fa-crosshairs w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
                  <p>Built-in Python Flask and Vuejs</p>
                  <p>Please contact us on social networks</p>
            </div>
          </div>
      </div>

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
       var path = 'http://192.168.0.33:5000/about'
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
     text-align: center;
   }
   h3{
     font-family:  'Roboto-bold', arial;
     color: #711616;
     text-align: center;
   }
   nav{
     align: center;
   }
   h4{
     font-family:  'Roboto-bold', sans-serif;
     font-size: 60 px;
     font-weight: bold;
   }
   p{
     font-family:  'Roboto', sans-serif;
   }
</style>
