<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-1" >
          <button type="button" class="btn btn-light m-2 col-12">Kõik</button>
          <button v-for="city in cities"  :key="city.cityId" :value="city.cityId" type="button" class="btn btn-light m-2 col-12" >{{ city.cityName }}</button>

        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "By-CityView",
  data: function (){
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
    getCitiesButonInfo: function () {
      this.$http.get('/library/city-list')
          .then(result => {
            this.cities = result.data
          })
          .catch(error => {
            console.log('viga')
          })
    }
  },
  beforeMount() {
    this.getCitiesButonInfo()
  }
}
</script>

