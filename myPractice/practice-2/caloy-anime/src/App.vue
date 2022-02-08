<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <input type="text" class="search">
    <div class="menu">
      <router-link :to="{name: 'AnimeList'}">Anime List</router-link>
      <router-link :to="{name: 'Login'}">Login</router-link>
      <router-link :to="{name: 'ContactMe'}">Contact Us</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav{
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
  /* padding: 10px 5vw; */
  padding: 0 5vw;
  background: #42b983;
  color: white;
}
#nav a{
  display: flex;
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
  padding: 10px 10px;
  text-decoration: none;
  white-space: nowrap;
  /* margin: 0 20px; */
  width: 100px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
#nav a:hover{
  background: #2daf75;
}
#nav a.router-link-exact-active {
  /* margin: 10px 0 0; */
  border-bottom: 5px double white;
  /* border-bottom: 1px solid #2daf75; */
  /* background: #29d889; */
  /* text-decoration: underline; */
}
.search{
  width: 100%;
  max-width: auto;
  padding: 10px 6px;
  margin: 0 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 100vh;
}
.menu{
  display: flex;
}
/* #nav {
  padding: 10px 5vw 10px;
  background: #42b983;
  border-bottom: 1px solid #ddd;
  text-align: left;
}
.search{
  display: inline-block;
  min-width: 50px;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid #bbb;
  border-radius: 10px;
  color: #555; 
  margin: 0 20px;
  padding: 3px 6px;
}
.menu{
  display: inline;
  float: right;
  height: 100%;
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
} */
</style>
