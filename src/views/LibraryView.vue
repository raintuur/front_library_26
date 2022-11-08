<template>
  <div class="container">

    <div class="row justify-content-start">

      <div class="col col-lg-4">
        <div>
          <LocationButtons/>
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
    getCityListByCityId: function (cityNameId) {
      this.$http.get("/library/city-list/by-city-id", {
            params: {
              cityNameId: this.libraryLocationInfo.cityId
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
    this.getLibraryLocationInfo()
  }
}
</script>
