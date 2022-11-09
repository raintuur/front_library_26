<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button v-on:click="clickAllCityButtonEvent" type="button" class="btn btn-success">Kõik</button>
    <button v-for="city in cities" :key="city.cityId" v-on:click="clickCityButtonEvent (city.cityId)" class="btn btn-danger"
            type="button">{{ city.cityName }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'CityButtons',
  data: function () {
    return {
      cities:
          [
            {
              cityName: '',
              cityId: 0
            }
          ]
    }
  },
  methods: {
    clickCityButtonEvent: function (cityId) {
      this.$emit('clickCityButtonEvent','cityId')

    },

    clickAllCityButtonEvent: function () {
      this.$emit ('clickAllCityButtonEvent')
    },

    getAllCities: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllCities()
  }

}
</script>
