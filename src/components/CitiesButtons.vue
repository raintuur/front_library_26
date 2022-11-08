<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button type="button" class="btn btn-outline-primary">Kõik</button>
      <button type="button" class="btn btn-outline-primary"v-for="city in cities" :key="city.cityNameID" :value="city.cityNameID">{{ city.cityName }}</button>
  </div>
</template>

<script>
export default {
  name: "CitiesButtons",
  data: function () {
    return {
      cities: [
        {
          "cityName": "string",
          "cityNameID": 0
        }
      ]

    }

  },
  methods: {
    getCitiesBottonsInfo: function () {
      this.$http.get('/library/city-list')
          .then(result => {
            this.cities = result.data
          })
          .catch(error => {
            alert('VIGA!')
          });

    }
  },
  beforeMount() {
    this.getCitiesBottonsInfo()
  }
}
</script>

<style scoped>
.button {
  margin: 10px;

}
</style>