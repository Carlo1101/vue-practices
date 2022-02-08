<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link> 
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default({
  methods: {
    redirect(){
      // this is similar to router-link
      this.$router.push({ name: 'Home' })
    },
    back(){
      // -1 means go back 1 page from history
      this.$router.go(-1)
    },
    forward(){
      // to move forward in history use positive integer
      this.$router.go(1)
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 1px solid #42b983;
  background: #ddd;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: 10px;
  border-radius: 4px;
}
</style>
