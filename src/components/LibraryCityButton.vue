<template>

    <div class="d-grid gap-2 col-6 mx-auto">
<!--      <button class="btn btn-success" type="button">Kõik</button>-->
      <button type="button" class="btn btn-outline-dark">Kõik</button>
<!--      <button v-for="city in cities" :key="city.cityId" :value="city.cityId" class="btn btn-danger" type="button">-->
<!--        {{ city.cityName}}</button>-->
      <button v-for="city in cities" :key="city.cityId" :value="city.cityId" type="button" class="btn btn-outline-dark">
        {{ city.cityName }}</button>
    </div>

</template>
<script>
export default {
  name: 'LibraryCityButton',
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
    getLibrariesCityButtonInfo: function () {
      this.$http.get('/library/city-list')
          .then(response => {
           // alert('Kõik ok!')
            this.cities =response.data
            console.log = response.data
          })
          .catch(error => {
            //alert('VIGA!')
           //console.log(error)
          });
    },
    //
    // clickSelectCityEvent: function () {
    //   this.$emit('clickSelectCityEvent', this.selectedCityID)
    // }
  },
  beforeMount() {
    this.getLibrariesCityButtonInfo()
  }
}

</script>

