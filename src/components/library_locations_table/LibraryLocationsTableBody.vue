<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{location.cityName}}</td>
    <td>{{location.libraryName}}</td>
    <td>
      <button v-on:click="navigateToLibraryView(location)" type="button" class="btn btn-warning">Vaata</button></td>

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
    navigateToLibraryView: function (location){

      sessionStorage.setItem('notification', location.notification),
          sessionStorage.setItem('libraryName', location.libraryName)

      this.$router.push({
        name: 'libraryAdminRoute', query:{libraryId: location.libraryId},

      })
    }
  }
}
</script>