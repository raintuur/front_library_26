<template>

  <table class="justify-content-start col-lg-4">
    <thead>
    <button type="button" class="btn btn-success col-lg-3">Kõik</button>
    </thead>

    <tbody>
    <tr v-for="libraryLocation in libraryLocations">
      <td>
        <button type="button" class="btn btn-success col-lg-3">
          {{ libraryLocation.cityName }}
        </button>
      </td>
    </tr>
    </tbody>
  </table>

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
