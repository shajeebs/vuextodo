<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todos</router-link> |
      <router-link to="/pets">Pets</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: lightgrey;
  }
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding:0 2rem;
  }
</style>
