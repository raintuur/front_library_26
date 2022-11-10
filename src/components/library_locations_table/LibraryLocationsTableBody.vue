<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{ location.cityName }}</td>
    <td>{{ location.libraryName }}</td>
    <td>
      <button class="btn btn-outline-dark"
      v-on:click="navigateToLibraryView(location.libraryName, location.libraryId, location.notification)">Vaata</button>
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
    navigateToLibraryView: function (libraryName, libraryId, notification) {
      this.$router.push({path: '/admin/library', query: {libraryId}})
      sessionStorage.setItem('libraryName', libraryName)
      sessionStorage.setItem('errorMessage', notification)
    }
  }
}
</script>