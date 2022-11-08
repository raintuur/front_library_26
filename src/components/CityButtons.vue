<template>
  <div class="col col-lg-1">
    <button type="button" class="btn btn-warning">Kõik</button>
    <button v-for="city in cities" :key="city.cityId" type="button" class="btn btn-warning">{{city.cityName}}</button>
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
        cityId: 0
      }
    ]
  }
},
  methods: {
    getCitiesLibrary: function () {
      this.$http.get('/library/city-list')
          .then(result => {
            this.cities = result.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

  beforeMount() {
    this.getCitiesLibrary()
  }
}
</script>
