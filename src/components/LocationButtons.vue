<template>
  <div>
    <div v-for="libraryLocation in libraryLocations">
      <button type="button" class="btn btn-outline-primary col-lg-4">
        {{ libraryLocation.cityName }}
      </button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'LocationButtons',
  props: {
    libraryLocations: {}
  },
  data: function () {
    return {
      libraryLocations: [
        {
          cityName: '',
          cityId: 0
        }
      ]
    }
  },
  methods: {
    getLibraryInfo: function () {
      this.$http.get("/library/by-city")
          .then(response => {
            this.libraryLocations = response.data
          })
          .catch(error => {
            alert('catch error triggered')
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getLibraryInfo()
  }
}
</script>