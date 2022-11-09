<template>
  <div class="row m-4 gap-2">
    <button v-on:click="clickAllCityButtonEvent" type="button" class="btn btn-success">Kõik</button>
    <button v-model="city.cityId" v-for="city in cities" :key="city.cityId" v-on:click="clickCityButtonEvent(city.cityId)"
            type="button" class="btn btn-outline-success">{{ city.cityName }}
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

    clickCityButtonEvent: function (cityId) {
      console.log('clickCityButtonEvent, cityId ' + cityId)
      this.$emit('clickCityButtonEvent', cityId)
    },

    clickAllCityButtonEvent: function () {
      this.$emit('clickAllCityButtonEvent')
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