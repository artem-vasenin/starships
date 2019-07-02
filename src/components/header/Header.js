export default {
  name: 'Header',
  data () {
    return {
      search: '',
      searchDialog: false
    }
  },
  computed: {
    /** признак обработки данных и запуск спиннера */
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    /** открыть диалоговое окно с полем поиска кораблей */
    SearchStarShips () {
      this.$store.dispatch('SetDialog', true)
    },
    /** перейти на страницу списка кораблей */
    GetStarShipsList () {
      this.$store.dispatch('SearchStarShips', null)
      this.$router.push('/starships/null')
    }
  }
}
