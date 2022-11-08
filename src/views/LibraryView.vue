<template>
  <div class="container">

    <div class="row justify-content-start">

      <div class="col col-lg-4">
        <div>
          <LocationButtons
              @allButtonsPressedEvent="getAllLibrariesLocationInfo"
              @libraryCityClickEvent="getCityListByCityId"
          />
        </div>
      </div>
      <LibraryLocationsTable :library-location-info="libraryLocationInfo"

      />
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
    getAllLibrariesLocationInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocationInfo = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    getCityListByCityId: function (cityNameId) {
      this.$http.get("/library/city-list/by-city-id", {
            params: {
              cityNameId: cityNameId
            }
          }
      ).then(response => {
        this.libraryLocationInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
  },
  beforeMount() {
    this.getAllLibrariesLocationInfo()
  }
}
</script>
