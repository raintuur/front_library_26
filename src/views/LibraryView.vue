<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-2">
          <LibraryCityButtons @clickCityButtonEvent="getOneLibraryLocationId"
                              @clickAllCityButtonEvent="getAllLibraryLocationsById"/>
        </div>
        <div class="col col-lg-9">
          <LibraryLocationsTable :library-locations="libraryLocations"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LibraryCityButtons from "@/components/LibraryCityButtons";
import LibraryLocationsTable from "@/components/library_locations_table/LibraryLocationsTable";

export default {
  name: "LibraryView",
  components: {LibraryLocationsTable, LibraryCityButtons},
  data: function () {
    return {
      libraryLocations: [
        {
          cityName: '',
          libraryName: '',
          libraryId: 0
        }
      ]
    }
  },
  methods: {


    getOneLibraryLocationId: function (selectedCityId) {

      let preference = ''
      switch (selectedCityId) {
        case 15:
          preference = 'code=200, example=200 - Tallinn';
          break;
        case 21:
          preference = 'code=200, example=200 - Tartu';
          break;
          case 23:
          preference = 'code=200, example=200 - Pärnu';
          break;
      }

      this.$http.get("/library/city-list/by-city-id", {
            params: {cityId: selectedCityId},
            headers: {
              'Content-Type': 'application/json',
              Prefer: preference
            }
          }

      ).then(response => {
        this.libraryLocations = response.data
      }).catch(error => {
        console.log(error)
      });
    },

    getAllLibraryLocationsById: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocations = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },

  beforeMount() {
    this.getAllLibraryLocationsById()
  }


}
</script>

