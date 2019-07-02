import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseURL = 'https://swapi.co/api/'

export default new Vuex.Store({
  state: {
    loading: false,
    dialog: false,
    count: 0,
    starShipsList: [],
    starShipsDetails: null,
    nextPage: null,
    prevPage: null
  },
  actions: {
    /**
     * открыть диалоговое окно с поиском
     * @param payload {boolean} открыть или закрыть окно
     */
    SetDialog ({commit}, payload) {
      commit('SetField', { name: 'dialog', value: payload })
    },
    /**
     * поиск кораблей по имени
     * @param payload {string|null} поисковая строка или null
     */
    SearchStarShips ({commit, rootGetters}, payload) {
      commit('SetField', { name: 'loading', value: true })
      const url = payload ? `starships/?search=${payload}` : 'starships/'
      rootGetters.ax.get(url)
        .then((response) => {
          commit('SetField', { name: 'nextPage', value: response.data.next })
          commit('SetField', { name: 'prevPage', value: response.data.previous })
          commit('SetField', { name: 'count', value: response.data.count })
          commit('SetField', { name: 'starShipsList', value: response.data.results })
        })
        .then(() => {
          commit('SetField', { name: 'loading', value: false })
        })
        .catch((err) => {
          commit('SetField', { name: 'loading', value: false })
          console.log(err)
        })
    },
    /**
     * Получить детали по выбранному кораблю
     * @param payload {string} url выбранного корабля
     */
    GetStarShipDetails ({commit, rootGetters}, payload) {
      commit('SetField', { name: 'loading', value: true })
      commit('SetField', { name: 'starShipsDetails', value: null })
      rootGetters.ax.get(payload)
        .then((response) => {
          commit('SetField', { name: 'starShipsDetails', value: response.data })
        })
        .then(() => {
          commit('SetField', { name: 'loading', value: false })
        })
        .catch((err) => {
          commit('SetField', { name: 'loading', value: false })
          console.log(err)
        })
    },
    /**
     * постраничная навигация для списка кораблей
     * @param payload {string} url на указанную страницу
     */
    GetStarShipsPage ({commit, rootGetters}, payload) {
      commit('SetField', { name: 'loading', value: true })
      rootGetters.ax.get(payload)
        .then((response) => {
          commit('SetField', { name: 'nextPage', value: response.data.next })
          commit('SetField', { name: 'prevPage', value: response.data.previous })
          commit('SetField', { name: 'count', value: response.data.count })
          commit('SetField', { name: 'starShipsList', value: response.data.results })
        })
        .then(() => {
          commit('SetField', { name: 'loading', value: false })
        })
        .catch((err) => {
          commit('SetField', { name: 'loading', value: false })
          console.log(err)
        })
    }
  },
  mutations: {
    /**
     * универсальная мутация для заполнения свойств стора
     * @param payload {Object} объект с именем и значением поля стора
     */
    SetField (state, payload) {
      state[payload.name] = payload.value
    }
  },
  getters: {
    /**
     * геттер для работы с запросами к бэкенду
     * @returns {AxiosInstance}
     */
    ax () {
      return axios.create({
        baseURL,
        timeout: 60000,
        headers: {'Content-Type': 'application/json'}
      })
    }
  }
})
