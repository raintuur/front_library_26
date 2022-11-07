<template>
  <div class="col col-lg-3">
    <button type="button" class="btn btn-light">Kõik</button>
    <div class="row m-3"></div>
    <button type="button" class="btn btn-light">Tallinn</button>
    <div class="row m-3"></div>
    <button type="button" class="btn btn-light">Tartu</button>
    <div class="row m-3"></div>
    <button type="button" class="btn btn-light">Pärnu</button>

  </div>
</template>

<script>
export default {
  name: 'RaamatukogudView',
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
      this.$http.get("/some/path")
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
