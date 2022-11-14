<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{ location.cityName }}</td>
    <td>{{ location.libraryName }}</td>
    <td>
      <button v-on:click="navigateToLibraryView(locationInfo)" type="button" class="btn btn-light">Vaata</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'LibraryLocationsTableBody',
  props: {
    libraryLocations: {}
  },
  methods: {
    navigateToLibraryView: function (locationInfo) {
      alert(locationInfo.notification)

      sessionStorage.setItem('notification', locationInfo.notification)
      sessionStorage.setItem('libraryName', locationInfo.libraryName)
      this.$router.push({
            name: 'LibraryAdminRoute', query: {
              libraryId: locationInfo.libraryId,
              userId: '101'

            }
          }
      )
    }

  }

}
</script>