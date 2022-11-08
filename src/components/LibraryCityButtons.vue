<template>
  <div class="row m-4 gap-2">
    <button v-on:click="libraryAllCityClickEvent" type="button" class="btn btn-success">Kõik</button>
    <button v-on:click="libraryCityClickEvent(cities.cityId)" v-model="city.cityId" v-for="city in cities" type="button" class="btn btn-outline-success"
            :key="city.cityId" :value="city.cityId">{{ city.cityName }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LibraryCityButtons',
  data: function () {
    return {

      cities: [
        {
          cityName: '',
          cityId: 0,
        }
      ],
      // displayCityButtons: false
    }
  },
  methods: {

    libraryCityClickEvent: function () {
      this.$emit('libraryCityClickEvent', this.cities.cityId)
    },

    libraryAllCityClickEvent: function () {
      this.$emit('libraryAllCityClickEvent')
    },

    getCitiesButtonInfo: function () {

      this.$http.get("/library/city-list")
          .then(response => {
            // this.displayCityButtons = true
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  beforeMount() {
    this.getCitiesButtonInfo()
  }
}
</script>