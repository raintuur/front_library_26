<template>
  <div class="d-grid gap-2">
  <div class="btn-group-vertical position-absolute top-40 start-0 ms-5">
    <button type="button" class="btn btn-danger">Kõik</button>
    <button v-for="city in cities" :key="city.cityId" type="button" class="btn btn-success">{{city.cityName}}</button>
  </div>
  </div>
</template>
<script>
export default {
  name: 'CitySelectButton',
  data: function () {
    return{
      cities: [
        {
          cityName: '',
          cityId: 0
        }
      ]
    }

  },
  methods: {
    getCityNames: function () {
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
    this.getCityNames()
  }
}


</script>
