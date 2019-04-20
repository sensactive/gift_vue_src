<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">
      <!--{{user.id}}<br>-->
      <!--{{user.username}}<br>-->
      <!--{{user.email}}<br>-->
      <!--<div v-html="user.profile"></div>-->
      <div v-for="(field, index) in user" v-bind:key="index">
        {{index}}: {{field}}
      </div>
      <button @click="deleteUser(user)">Удалить</button>
      <br><br><br>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-list',
  computed: mapGetters(['users']),
  methods: {
    deleteUser (user) {
      // Вызываем действие `deleteUser` из нашего хранилища, которое
      // попытается удалить заметку из нашех базы данных, отправив запрос к API
      this.$store.dispatch('deleteUser', user)
    }
  },
  beforeMount () {
    // Перед тем как загрузить страницу, нам нужно получить список всех
    // имеющихся заметок. Для этого мы вызываем действие `getUsers` из
    // нашего хранилища
    this.$store.dispatch('getUsers')
  }
}
</script>

<style scoped>

</style>
