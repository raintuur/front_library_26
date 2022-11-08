<template>
  <div class="container">

    <div class="row justify-content-start">

      <div class="col col-lg-4">
        <div>
          <LocationButtons :cities="cities"/>
        </div>
      </div>

      <LibraryLocationsTable :library-location-info="libraryLocationInfo"/>

    </div>


  </div>


</template>

<script>
import LocationButtons from "@/components/LocationButtons";
import LibraryLocationsTable from "@/components/LibraryLocationsTable";

export default {
  name: "LibraryView",
  components: {LibraryLocationsTable, LocationButtons},
  data: function () {
    return {
      cities: [
        {
          cityName: '',
          cityId: 0
        }
      ]
    }
  },
  methods: {
    getLibraryInfoByCity: function () {
      this.$http.get("/library/by-city")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            alert('catch error triggered')
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getLibraryInfoByCity()
  }
}
</script>
