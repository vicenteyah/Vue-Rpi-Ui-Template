<template>
  <nav>
    <div class="jumbotron">
       <h1>To Use the heartbeat sensor</h1>
        <h2> Please Enter your data info </h2>
        <p> </p>
        <input v-model = "data.nombre" placeholder="Name">
        <p> </p>
        <input v-model = "data.apaterno" placeholder="Last Name">
        <p> </p>
        <input v-model = "data.tipoSangre" placeholder="Blood Type">
        <p> </p>
        <button class ="btn btn-primary btn-lg" @click.prevent="getSignals"> Use pulse Sensor </button>
        <p> </p>
        <table class=" table table-striped">
          <thead class ="thead-dark">
             <tr>
               <th>Name</th>
               <th>Last name</th>
               <th>Blood type</th>
             </tr>
          </thead>
          <tbody>
            <td>{{ data.nombre }}</td>
            <td>{{ data.apaterno }}</td>
            <td>{{ data.tipoSangre }}</td>
          </tbody>

        </table>
      </div>

  </nav>
</template>


<script>
export default {
  name: "app",
  data() {
    return{
       data: {
          nombre:'',
          apaterno:'',
          tipoSangre:''
      },
    };
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
</style>
