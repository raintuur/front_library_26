<template>
  <div class="container">

    <div class="row justify-content-start">

      <div class="col col-lg-4">
        <div>
          <LocationButtons/>
        </div>
      </div>

      <LibraryLocationsTable :library-location-info="libraryLocationInfo"/>
    </div>
  </div>
</template>

<script>
import LocationButtons from "@/components/LocationButtons";
import LibraryLocationsTable from "@/components/LibraryLocationsTable";

export default {
  name: "LibraryView",
  components: {LibraryLocationsTable, LocationButtons},
  data: function () {
    return {
      libraryLocationInfo: [
        {
          cityName: '',
          libraryName: '',
          libraryId: 0
        }
      ]
    }
  },
  methods: {
    getLibraryLocationInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocationInfo = response.data
            // alert('Oled libraryLocationInfo plokis')
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getLibraryLocationInfo()
  }
}
</script>
