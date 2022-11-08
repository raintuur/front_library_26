<template>
  <div>
    <button type="button" class="btn btn-outline-primary">Kõik</button>
    <div v-for="city in cities" :key="city.cityNameID" :value="city.cityNameID">
      <button type="button" class="btn btn-outline-primary">{{ city.cityName }}</button>
    </div>
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