<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{location.cityName}}</td>
    <td>{{location.libraryName}}</td>
    <td>
      <button v-on:click="" type="button" class="btn btn-warning">Vaata {{location.libraryId}}</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'LibraryLocationsTableBody',
  props: {
    libraryLocations: {}
  }
}
</script>