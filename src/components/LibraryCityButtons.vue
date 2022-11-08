<template>
  <div class="row m-4 gap-2">
    <button v-on:click="getCitiesButtonInfo()" type="button" class="btn btn-success">Kõik</button>
    <button v-if="displayCityButtons" v-for="city in cities" type="button" class="btn btn-outline-success"
            :key="city.cityId" :value="city.cityId">{{ city.cityName }}
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
      displayCityButtons: false
    }
  },
  methods: {
    getCitiesButtonInfo: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.displayCityButtons = true
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