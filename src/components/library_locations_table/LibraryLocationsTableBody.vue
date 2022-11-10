<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{location.cityName}}</td>
    <td>{{location.libraryName}}</td>
    <td>
      <button v-on:click="navigateToLibraryView(locationInfo)" type="button" class="btn btn-light">Vaata {{location.libraryId}}</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
import LibraryAdminView from "@/views/LibraryAdminView";

export default {
  name: 'LibraryLocationsTableBody',
  props: {
    libraryLocations: {}
  },
  methods: {
      navigateToLibraryView: function (locationInfo) {

        sessionStorage.setItem('notification', locationInfo.notification)
        sessionStorage.setItem('libraryName', locationInfo.libraryName)
        this.$router.push({
          name: 'libraryAdminRoute' , query:{
            libraryId: locationInfo.libraryId

          }
        })


      }

  }
}






</script>