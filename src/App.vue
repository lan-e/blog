<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </nav>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 10px;
}
nav a:hover {
  color: #42b983;
}
nav a.router-link-exact-active {
  background: #42b983;
  padding: 16px;
  border-radius: 8px;
  color: #fff;
}
</style>
