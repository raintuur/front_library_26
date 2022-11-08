<template>
  <div class="col-1 justify-content-start">
    <div class="px-1 py-1">
      <button type="button" class="btn btn-success">Kõik</button>
    </div>
    <div v-for= "cities in allCities" class="px-1 py-1">
        <button type="button" class="btn btn-success">{{cities.allCities}}</button>
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
