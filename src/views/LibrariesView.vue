<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <CityButtons/>
      </div>
      <div class="col-lg-5">
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
          libraryId: 0
        }
      ]
    }
  },
  methods: {
    getAllLibrariesLocationInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.getAllLibrariesLocationInfo = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllLibrariesLocationInfo()
  }
}
</script>

