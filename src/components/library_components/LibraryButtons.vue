<template>
  <div>
  <div class="col-2 d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-success " type="button">Kõik</button>
    <button v-for="city in allCities" :key="city.cityId" class="btn btn-outline-warning" type="button">{{ city.cityName }}</button>
  </div>

  </div>
</template>


<script>

export default {
  name: 'LibraryButtons',
  data: function () {
    return {
      allCities: [
        {
          cityName: '',
          cityId: 0
        }
      ]
    }

  },
  methods: {
    getLibraryCityName: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.allCities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

  beforeMount() {
    this.getLibraryCityName()
  },


}


</script>
