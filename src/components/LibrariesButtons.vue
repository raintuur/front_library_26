<template>
  <div class="d-grid gap-2 col-2 mx-auto">
    <button v-on:click="clickAllCityButtonEvent" class="btn btn-success" type="button">Kõik</button>
    <button v-for="city in cities" :key="city.cityId" v-on:click="clickCityButtonEvent(city.cityId)"
            class="btn btn-danger" type="button">{{ city.cityName }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'LibrariesButtons',
  data: function () {
    return {
      cities: [
        {
          cityName: '',
          cityId: 0
        }
      ]
    }
  },
  methods: {
    getCityList: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.cities = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    clickCityButtonEvent: function (cityId) {
      this.$emit('clickCityButtonEvent', cityId)
    },
    clickAllCityButtonEvent: function () {
      this.$emit('clickAllCityButtonEvent')
    }
  },
  beforeMount() {
    this.getCityList()
  }
}
</script>