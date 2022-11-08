<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-success" type="button">Kõik</button>
    <button v-for="city in cities" :key="city.cityId" class="btn btn-danger" type="button">{{city.cityName}}</button>
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
            this.getCityList = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getCityList()
  }
}
</script>