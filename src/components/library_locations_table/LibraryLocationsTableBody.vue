<template>
  <tbody>
  <tr v-for="libraryLocation in libraryLocations" :key="libraryLocation.libraryId">
    <th scope="row">{{ libraryLocation.cityName }}</th>
    <td>{{ libraryLocation.libraryName }}</td>
    <td>
      <button v-on:click="navigateToLibraryView(libraryLocation)" type="button" class="btn btn-outline-success">Vaata</button>
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
    navigateToLibraryView: function (libraryLocation) {
      // alert(JSON.stringify(libraryLocation.notification))

      sessionStorage.setItem('libraryName', libraryLocation.libraryName)
      sessionStorage.setItem('notification', libraryLocation.notification)

      this.$router.push({name: 'libraryAdminRoute', query: {
        libraryId: libraryLocation.libraryId
        }})
    }
  }
}
</script>