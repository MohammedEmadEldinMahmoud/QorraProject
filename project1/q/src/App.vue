<template>
  <navbar />

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <foot />
</template>



<script>
// import HelloWorld from "./components/HelloWorld.vue";
import navbar from "@/components/navbar.vue";
import homepage from "@/views/homepage.vue";
import foot from "@/components/foot.vue";



// export default {
//   components: { 
//     navbar 
//   },
// }
export default {

  components: { homepage, navbar, foot }
};



</script>





<style>
.foot {
  text-align: center;
}

/* #app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

nav {
padding: 30px;
}

nav a {
font-weight: bold;
color: #2c3e50;
}

nav a.router-link-exact-active {
color: #42b983;
} */
</style>

