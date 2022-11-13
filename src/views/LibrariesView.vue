<template>
  <div>

    <div class="row">

      <div class="col-lg-3">
        <CityButtons/>
      </div>

      <div class="col-lg-6">

        <LibraryLocationsTable  :library-locations="libraryLocations"/>

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
          libraryId: '',
          notification: ''
        }
      ]
    }
  },
  methods: {
    getAllLibariesLocationInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocations = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllLibariesLocationInfo()
  }
}
</script>

