<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-3">
          <CitiesButtons/>
        </div>
        <div class="col col-lg-9">
          <LibrariesTable :libraries="libraries"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CitiesButtons from "@/components/CitiesButtons";
import LibrariesTable from "@/components/LibrariesTable";


export default {
  name: "LibrariesView",
  components: {LibrariesTable, CitiesButtons},
  data: function () {
    return {
    libraries: [
      {
        libraryCity: '',
        libraryID: 0,
        libraryName: ''
      }
    ]
  }
  },
  methods: {
    getLibraryLocationsInfoById: function (cityId) {

      // let prefernce = ''
      if (cityId == 15){
        this.preference = 'code=200, example=200 - Tallinn'
      } else if (cityId == 23) {
        this.preference = 'code=200, example=200 - Pärnu'

      }

      this.$http.get("/library/city-list/by-city-id", {
            params: {cityId: 'cityId'},
        headers: {
              'Content-Type': 'applications/json',
        Prefer: this.preference
            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    getLibrariesInfo: function () {
      this.$http.get('/library/city-list/all')
          .then(result=> {
            this.libraries = result.data
          })
          .catch(error => {
            console.log(error)
          })
    }

  },
  beforeMount() {
    this.getLibrariesInfo()
    this.getLibraryLocationsInfoById(15)
  }
}
</script>

