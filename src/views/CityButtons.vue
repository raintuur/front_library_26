<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-danger" type="button">Kõik</button>
    <button v-for="city in cities" :key="city.cityId" class="btn btn-success" type="button">{{city.cityName}}</button>

  </div>
</template>
<script>
export default {
  name: 'CityButtons',
  data: function () {
    return {
      cities: [
        {
          cityName: '',
          cityId: ''
        }
      ]
    }
  },
  methods: {
    getAllCities: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.cities=response.data
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
