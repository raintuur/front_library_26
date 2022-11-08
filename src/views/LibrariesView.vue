<template>
  <div class="col col-lg-3">
    <button type="button" class="btn btn-light">Kõik</button>
    <div class="row m-3"></div>
    <button v-on:click="getCityList" type="button" class="btn btn-light">Tallinn</button>
    <div class="row m-3"></div>
    <button v-on:click="getCityList" type="button" class="btn btn-light">Tartu</button>
    <div class="row m-3"></div>
    <button v-on:click="getCityList" type="button" class="btn btn-light">Pärnu</button>
    <div class="row m-3"></div>

  </div>
</template>

<script>
export default {
  name: 'LibrariesView',
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
      this.$http.get("https://stoplight.io/mocks/mario25/myproject/83536708/library/city-list")
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  }
}

</script>
