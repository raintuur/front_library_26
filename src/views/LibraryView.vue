<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-2">
          <LibraryCityButtons @libraryCityClickEvent="getOneLibraryLocationId"
          @libraryAllCityClickEvent = "getAllLibraryLocationsById"/>
        </div>
        <div class="col col-lg-9">
          <LibraryLocationsTable :library-locations="libraryLocations" @libraryCityClickEvent="getOneLibraryLocationId"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LibraryCityButtons from "@/components/LibraryCityButtons";
import LibraryLocationsTable from "@/components/LibraryLocationsTable";

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


    getOneLibraryLocationId: function (selectedLibraryId) {
      this.$http.get("/library/city-list/by-city-id", {
            params: {
              cityId: selectedLibraryId,

            }
          }
      ).then(response => {
        this.libraryLocations = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
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

