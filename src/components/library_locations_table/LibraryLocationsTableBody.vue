<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{location.cityName}}</td>
    <td>{{location.libraryName}}</td>
    <td>
      <button type="button" class="btn btn-light" v-on:click="navigateToLibraryView">Vaata {{location.libraryId}}</button>
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
    navigateToLibraryView: function () {
      
    }
  }
}
</script>