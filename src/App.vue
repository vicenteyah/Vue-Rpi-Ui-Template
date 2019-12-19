<template>
  <div id="app">
    <nav class="main-nav">
      <img src="./assets/rpi.png">
      <div class="logo">RPi Heartbeat Sensor Ui</div>
      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link tag="a" to="/home" class="scroll-suave">Home</router-link>
        </li>
        <li>
          <router-link tag="a" to="/data" class="scroll-suave">Data Patient</router-link>
        </li>
        <li>
          <router-link tag="a" to="/about" class="scroll-suave">About us</router-link>
        </li>
      </ul>
    </Sidebar>
    <router-view/>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar
  }
};
</script>
<style>
html {
  height: 100%;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.13),
    rgba(0, 238, 186, 0.596),
    rgba(255, 0, 0, 0.301));
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color:rgba(59, 10, 82, 0.459);
  font-family: Baloo Bhai , sans-serif;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

</style>
