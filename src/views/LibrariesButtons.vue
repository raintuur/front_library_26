<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-success" type="button">Button</button>
    <button v-for="city in cities" :key="city.cities" class="btn btn-danger" type="button">{{city.cityName}}</button>

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
