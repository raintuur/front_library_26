<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-2">
          <LibraryCityButtons/>
        </div>
        <div class="col col-lg-9">

          <table class="table">
            <thead>
            <tr>
              <th scope="col">Linn</th>
              <th scope="col">Nimi</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="libraryLocation in libraryLocations" :key="libraryLocation.libraryId">
              <th scope="row">{{libraryLocation.cityName}}</th>
              <td>{{libraryLocation.libraryName}}</td>
              <td>
                <button type="button" class="btn btn-outline-success">Vaata</button>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LibraryCityButtons from "@/components/LibraryCityButtons";

export default {
  name: "LibraryView",
  components: {LibraryCityButtons},
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

    getAllLibraryLocationsById: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryLocations = response.data
            // console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getAllLibraryLocationsById()
  }

}
</script>

