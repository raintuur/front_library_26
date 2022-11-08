<template>
  <div class="container">
    <div class="row">
      <div class="col col-2">
        <LibraryViewButtons
            @buttonAllPressed="getLibraryTableInfo"
            @buttonOtherPressed="getLibraryTableInfoByCityId"/>
      </div>
      <div class="col col-10">
        <LibraryViewTable :library-locations="libraryLocations"/>
      </div>
    </div>
  </div>
</template>

<script>
import LibraryViewButtons from "@/components/LibraryViewComponents/LibraryViewButtons";
import LibraryViewTable from "@/components/LibraryViewComponents/LibraryViewTable";

export default {
  name: "LibraryView",
  components: {LibraryViewTable, LibraryViewButtons},

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

    getLibraryTableInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocations = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getLibraryTableInfoByCityId: function (selectedCityId) {
      this.$http.get("/library/city-list/by-city-id", {
            params: {
              cityId: selectedCityId,
            }
          }
      ).then(response => {
        this.libraryLocations = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  },

  beforeMount() {
    this.getLibraryTableInfo()
  }
}
</script>

