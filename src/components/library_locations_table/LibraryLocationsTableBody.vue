<template>
  <tbody>
  <tr v-for="locationInfo in libraryLocations" :key="locationInfo.libraryId">
    <td>{{ locationInfo.cityName }}</td>
    <td>{{ locationInfo.libraryName }}</td>
    <td>
      <button class="btn btn-outline-dark"
              v-on:click="navigateToLibraryView(locationInfo)">Vaata
      </button>
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
  data: function () {
    return {}
  },
  methods: {
    navigateToLibraryView: function (locationInfo) {
      sessionStorage.setItem('libraryName', locationInfo.libraryName)
      sessionStorage.setItem('errorMessage', locationInfo.notification)
      this.$router.push({
        name: 'libraryAdminRoute',
        query: {libraryId: locationInfo.libraryId}
      })
    }
  }
}
</script>