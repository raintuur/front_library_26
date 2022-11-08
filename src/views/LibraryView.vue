<template>
  <div class="container">

    <div class="justify-content-start">

      <div class="col col-lg-4">
        <div>
        <button type="button" class="btn btn-primary col-lg-4">Kõik</button>
        </div>

        <div v-for="libraryLocation in libraryLocations">
            <button type="button" class="btn btn-outline-primary col-lg-4">
              {{ libraryLocation.cityName }}
            </button>
        </div>
      </div>





    </div>

  </div>


</template>

<script>
export default {
  name: "LibraryView",
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
