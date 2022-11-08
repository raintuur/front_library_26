<template>
  <div class="container">
    <div class="row">
      <div class="col col-2">
        <LibraryViewButtons :library-cities="libraryCities" @buttonAllPressed="getLibraryTableInfo"/>
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
      libraryCities: [
        {
          cityName:'',
          cityId: 0
        }
      ],
      libraryLocations: [
        {
          cityName:'',
          libraryName:'',
          libraryId: 0
        }
      ]
    }
  },

  methods: {
    getLibraryCityInfo: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.libraryCities = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
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
  },

  beforeMount() {
    this.getLibraryCityInfo()
    this.getLibraryTableInfo()
  }
}
</script>

