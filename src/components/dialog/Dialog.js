export default {
  name: 'Dialog',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    /** флаг активности диалогового окна */
    searchDialog () {
      return this.$store.state.dialog
    }
  },
  methods: {
    /** закрыть всплывающий диалог */
    CloseDialog () {
      this.search = ''
      this.$store.dispatch('SetDialog', false)
    },
    /** запустить поиск кораблей по имени и закрыть диалог */
    SearchStarShips () {
      this.search && this.$store.dispatch('SearchStarShips', this.search)
      this.$router.push(`/starships/${this.search}`)
      this.CloseDialog()
    },
    /** отслеживаем нажатие на enter во время заполнения поля поиска */
    PostMessageKeydown (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault()
        this.SearchStarShips()
      }
    }
  }
}
