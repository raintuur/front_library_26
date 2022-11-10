<template>
  <div>

    <div class="row">

      <div class="col col-lg-3">
        <CityButtons
            @clickCityButtonEvent="getLibraryLocationsInfoById"
            @clickAllCityButtonEvent="getAllLibrariesLocationInfo"
        />
      </div>
      <div class="col col-lg-6 mx-5">
        <LibraryLocationsTable :library-locations="libraryLocations"/>
      </div>

    </div>

  </div>
</template>

<script>
import CityButtons from "@/views/CityButtons";
import LibraryLocationsTable from "@/components/library_locations_table/LibraryLocationsTable";

export default {
  name: "LibrariesView",
  components: {LibraryLocationsTable, CityButtons},
  data: function () {
    return {

      libraryLocations: [
        {
          cityName: '',
          libraryName: '',
          libraryId: 0,
          notification: ''
        }
      ]
    }
  },
  methods: {

    getAllLibrariesLocationInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    getLibraryLocationsInfoById: function (cityId) {

      let preference = ''
      switch (cityId) {
        case 15:
          preference = 'code=200, example=200 - Tallinn'
          break;
        case 23:
          preference = 'code=200, example=200 - Pärnu'
          break;
        case 21:
          preference = 'code=200, example=200 - Tartu'
          break;
      }

      this.$http.get("/library/city-list/by-city-id", {
            params: {cityId: cityId},
            headers: {
              'Content-Type': 'application/json',
              Prefer: preference
            }

          }
      ).then(response => {
        this.libraryLocations = response.data
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

