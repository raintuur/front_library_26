<template>
  <div>
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
        <th scope="row">{{ libraryLocation.cityName }}</th>
        <td>{{ libraryLocation.libraryName }}</td>
        <td>
          <button type="button" class="btn btn-outline-success">Vaata</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'LibraryLocationsTable',
  props: {
    libraryLocations: Array()
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
    }
  },
  beforeMount() {
    this.getAllLibraryLocationsById()
  }
}
</script>