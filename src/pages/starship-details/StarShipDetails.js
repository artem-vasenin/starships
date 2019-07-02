export default {
  name: 'StarShipDetails',
  data () {
    return {
      details: [],
      headers: [
        {
          text: 'Наименование',
          align: 'left',
          value: 'name',
          sortable: false
        },
        {
          text: 'Значение',
          align: 'right',
          value: 'value',
          sortable: false
        }
      ]
    }
  },
  computed: {
    /** получить детали корабля */
    starShipsDetails () {
      this.details = this.$store.state.starShipsDetails
        ? this.AddDetailsItems(this.$store.state.starShipsDetails)
        : []
      return this.$store.state.starShipsDetails
    }
  },
  methods: {
    /** преобразуем объект в массив объектов для date-tables */
    AddDetailsItems (obj) {
      let items = []
      for (let key in obj) {
        let value = null
        if (Array.isArray(obj[key]) || key === 'url') {
          continue
        } else {
          value = obj[key]
        }
        items.push({name: key, value: value})
      }
      return items
    }
  }
}
