<template>
  <div id="app">
    <CreateUser/>
    <!--<UserList/>-->
  </div>
</template>

<script>
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'

export default {
  name: 'App',
  components: {
    CreateUser,
    UserList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
