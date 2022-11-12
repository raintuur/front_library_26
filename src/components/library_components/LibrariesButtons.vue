<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button v-on:click="clickAllCityButtonEvent" class="btn btn-success" type="button">Button</button>
    <button v-for="city in cities" :key="city.cities" v-on:click="clickCityButtonEvent(city.cityId)"
            class="btn btn-danger" type="button">{{ city.cityName }}
    </button>

  </div>
</template>
<script>
export default {
  name: 'LibrariesButtons',
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
    clickCityButtonEvent: function (cityId) {
      this.$emit('clickCityButtonEvent', cityId);
    },
    clickAllCityButtonEvent: function () {
      this.$emit('clickAllCityButtonEvent', )
    }

    getAllCities: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllCities()
  }
}
</script>
