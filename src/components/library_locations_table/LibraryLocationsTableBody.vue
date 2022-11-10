<template>
  <tbody>
  <tr v-for="locationInfo in libraryLocations" :key="locationInfo.libraryId">
    <td>{{locationInfo.cityName}}</td>
    <td>{{locationInfo.libraryName}}</td>
    <td>
      <button v-on:click="navigateToLibraryView(locationInfo)" type="button" class="btn btn-light">Vaata {{locationInfo.libraryId}}</button>
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
      // alert(locationInfo.notification)

      sessionStorage.setItem('notification', locationInfo.notification)
      sessionStorage.setItem('libraryName', locationInfo.libraryName)
      this.$router.push({
        name:'libraryAdminRoute', query:{
          libraryId: locationInfo.libraryId
        }
          })

    }
  }
}
</script>