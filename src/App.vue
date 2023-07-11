<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'EventList' }">Home</RouterLink> | 
      <RouterLink :to="{ name: 'about' }">About</RouterLink> |
      <RouterLink :to="{ name: 'Menu' }">Menu</RouterLink> |
      <RouterLink :to="{ name: 'Student' }">Student</RouterLink>
      <div class="page-sizes">|
      <RouterLink :to="{ name: 'EventList', query:{ size: 1 } }">Size of 1</RouterLink> |
      <RouterLink :to="{ name: 'EventList', query:{ size: 2 } }">Size of 2</RouterLink> |
      <RouterLink :to="{ name: 'EventList', query:{ size: 3 } }">Size of 3</RouterLink> |
      </div>
    </nav>
  </header>

  <RouterView />
</template>

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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.page-sizes {
  display: flex;
  gap: 10px;
}

.page-sizes a {
  margin: 0 10px;
}
</style>
