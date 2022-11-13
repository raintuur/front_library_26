<template>
  <tbody>
  <tr v-for="locationInfo in librariesInfo" :key="locationInfo.libraryId">
    <td>{{locationInfo.cityName}}</td>
    <td>{{locationInfo.libraryName}}</td>
    <td>
      <button v-on:click="navigateToLibraryView(locationInfo)" type="button" class="btn btn-warning">Vali {{locationInfo.libraryId}}</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'LibrariesTableBody',
  props: {
    librariesInfo: {}
  },
  methods: {
    navigateToLibraryView: function (locationInfo) {
      sessionStorage.setItem('notification',locationInfo.notification)
      sessionStorage.setItem('libraryName',locationInfo.libraryName)

      this.$router.push({
        name: 'LibraryAdminRoute', query:{
          libraryId: locationInfo.libraryId
        }
      })
    }
  }
}
</script>