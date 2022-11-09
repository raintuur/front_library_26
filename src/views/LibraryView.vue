<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <CitySelectButton/>

        <table class="table table-success table-striped-columns" style=margin-left:100px>
          <LibraryLocationsTableHead/>
          <LibraryLocationsTableBody :library-locations="libraryLocations"/>
        </table>

        <div class="col-lg-9">
          <CityLibraryTable/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CitySelectButton from "@/components/library_view_table/CitySelectButton";
import CityLibraryTable from "@/components/library_view_table/CityLibraryTable";
import LibraryLocationsTableHead from "@/components/LibraryLocationsTableHead";
import LibraryLocationsTableBody from "@/components/LibraryLocationsTableBody";

export default {
  name: "byCityView",
  components: {LibraryLocationsTableBody, LibraryLocationsTableHead, CityLibraryTable, CitySelectButton},
  data: function () {
    return{
      libraryLocations: [
        {
          cityName: "string",
          libraryName: "string",
          libraryId: 0
        }
      ]

    }

  },

  methods: {
    getAllLibrariesInfo: function () {
      this.$http.get("/library/city-list/allnew")
          .then(response => {
            this.libraryLocations = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllLibrariesInfo()
  }
}
</script>

