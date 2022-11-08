<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary col-lg-4">Kõik</button>
    </div>
    <div v-for="city in cities">
      <button type="button" class="btn btn-outline-primary col-lg-4">
        {{ city.cityName }}
      </button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'LocationButtons',
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
    getCitiesInfo: function () {
      this.$http.get("/library/by-city")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            alert('catch error triggered')
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getCitiesInfo()
    this.getLibraryLocationInfo()
  }
}
</script>