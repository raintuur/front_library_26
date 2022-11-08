<template>
  <div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-success " type="button">Kõik</button>
      <button v-for="city in cities" :key="city.cityId" class="btn btn-outline-warning" type="button">{{ city.cityName }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CitiesSelection',

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
    getLibraryCityList: function () {
      this.$http.get('/library/city-list')
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {})
    },
  },
  beforeMount() {
    this.getLibraryCityList()
  },

}
</script>
