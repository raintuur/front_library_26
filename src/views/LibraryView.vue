<template>
  <div class="container">
    <div class="row">
      <div class="col col-2">
        <LibraryViewButtons
            @buttonAllPressed="getLibraryTableInfo"
            @buttonOtherPressed="getLibraryTableInfoByCityId"/>
      </div>
      <div class="col col-10">
        <LibraryViewTable :library-locations="libraryLocations" />
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
          libraryId: 0,
          notification: ''
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

        let preference = ''
        switch (selectedCityId) {
          case 15:
            preference = 'code=200, example=200-Tallinn'
            break
        case 21:
          preference = 'code=200, example=200-Tartu'
              break
        case 23:
          preference  = 'code=200, example=200-Pärnu'
              break
      }

      this.$http.get("/library/city-list/by-city-id", {
        params: {cityId: selectedCityId},
        headers: {
          'Content-Type': 'application/json',
          Prefer: preference}
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

