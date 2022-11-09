<template>
  <div class="row justify-content-center">

    <div class="col col-lg-3">
      <LibrariesButtons @clickCityButtonEvent="getLibraryLocationsInfoById"
                        @clickAllCityButtonEvent="getLibraryInfo"/>
    </div>

    <div class="col-lg-4">
      <LibrariesTable :library-info="libraryInfo"/>
    </div>

  </div>
</template>

<script>
import LibrariesButtons from "@/components/LibrariesButtons";
import LibrariesTable from "@/components/library_table/LibrariesTable";

export default {
  name: 'LibrariesView',
  components: {LibrariesTable, LibrariesButtons},
  data: function () {
    return {
      preference: '',
      libraryInfo: [
        {
          cityName: '',
          libraryName: '',
          libraryId: 0
        }
      ]
    }
  },

  methods: {
    getLibraryLocationsInfoById: function (cityId) {

      let preference = ''
      switch (cityId) {
        case 15:
          preference = 'code=200, example=200 - Tallinn'
          break
        case 21:
          preference = 'code=200, example=200 - Tartu'
          break
        case 23:
          preference = 'code=200, example=200 - Pärnu'
          break
      }

      this.$http.get("library/city-list/by-city-id", {
            params: {cityId: cityId},
            headers: {
              'Content-Type': 'application/json',
              Prefer: preference
            },
          }
      ).then(response => {
        this.libraryInfo = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getLibraryInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryInfo = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  beforeMount() {
    this.getLibraryInfo()
    // this.getLibraryLocationsInfoById(15)
  }
}

</script>
