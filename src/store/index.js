import Vue from 'vue'
import Vuex from 'vuex'
import {Users} from '../api/users'
import {ADD_USER,
  SET_USERS,
  REMOVE_USER} from './mutation-types'

Vue.use(Vuex)

/**
 * Состояние
 * @type {{users: Array}}
 */
const state = {
  users: [] // список пользователей
}

/**
 * геттеры
 * @type {{users: function(*): Array}}
 */
const getters = {
  users: state => state.users // получаем список пользователей из состояния
}

/**
 * Мутации
 * @type {{}}
 */
const mutations = {
  // Добавляем пользователя в список
  [ADD_USER] (state, user) {
    state.users = [user, ...state.users]
  },
  // Убираем пользователя из списка
  [REMOVE_USER] (state, {id}) {
    state.users = state.users.filter(user => {
      return user.id !== id
    })
  },
  // Задаем список пользователей
  [SET_USERS] (state, {users}) {
    state.users = users
  }
}

/**
 * Действия
 * @type {{createUser({commit: *}, *=): void, deleteUser({commit: *}, *=): void, getUsers({commit: *}): void}}
 */
const actions = {
  createUser ({commit}, userData) {
    Users.create(userData).then(user => {
      commit(ADD_USER, user)
    })
  },
  deleteUser ({commit}, user) {
    Users.delete(user).then(response => {
      commit(REMOVE_USER, user)
    })
  },
  getUsers ({commit}) {
    Users.list().then(users => {
      commit(SET_USERS, {users})
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
