<template>
  <div class="col col-lg-8">
    <div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">Linn</th>
          <th scope="col">Nimi</th>
          <th scope="col"></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="locationInfo in libraryLocationInfo" :key="locationInfo.libraryId">
          <th scope="row">{{ locationInfo.cityName }}</th>
          <td>{{ locationInfo.libraryName }}</td>
          <td>
            <button v-on:click="navigateToLibraryView(locationInfo)" type="button" class="btn btn-outline-primary col-lg-6">
              Vaata
            </button>
          </td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryLocationsTable',
  props: {
    libraryLocationInfo: {}
  },
  methods: {
    navigateToLibraryView: function (locationInfo) {
      let preference = ''
      switch (locationInfo.libraryId) {
        case 3:
          preference = 'code=200, example=200 - Tallinn'
          break;
        case 5:
          preference = 'code=200, example=200 - Tartu'
          break;
        case 7:
          preference = 'code=200, example=200 - Pärnu'
          break;
      }
      this.$http.get("/library/city-list/by-city-id", {
            headers: {
              'Content-Type': 'application/json',
              Prefer: preference
            }
          }
      ).then(response => {
        this.libraryLocationInfo = response.data
        sessionStorage.setItem('notification', locationInfo.notification)
        this.$router.push({name: 'libraryAdminRoute', query: {
            libraryName: locationInfo.libraryName,
            libraryId: locationInfo.libraryId
          }
        })
      })
    }
  }
}
</script>