export default {
  name: 'StarShipList',
  props: ['search'],
  data () {
    return {
      page: 2
    }
  },
  computed: {
    /** список выбранных кораблей */
    starShipsList () {
      return this.$store.state.starShipsList || []
    },
    /** предыдущая страница */
    prevPage () {
      return this.$store.state.prevPage
    },
    /** следующая страница */
    nextPage () {
      return this.$store.state.nextPage || []
    }
  },
  methods: {
    /** получить список кораблей */
    GetStarShipsList () {
      const payload = (this.$props.search !== 'null')
        ? this.$props.search
        : null
      this.$store.dispatch('SearchStarShips', payload)
    },
    /** перейти на страницу детальной информации о коробле */
    GetStarShipDetails (url) {
      this.$store.dispatch('GetStarShipDetails', url)
      this.$router.push('/starship')
    },
    /** на страницу назад */
    PrevPage () {
      this.$store.dispatch('GetStarShipsPage', this.prevPage)
    },
    /** на страницу вперед */
    NextPage () {
      this.$store.dispatch('GetStarShipsPage', this.nextPage)
    }
  },
  mounted () {
    this.$props.search && this.GetStarShipsList()
  }
}
