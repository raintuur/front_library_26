<template>
  <tbody>
  <tr v-for="location in libraryLocations" :key="location.libraryId">
    <td>{{ location.cityName }}</td>
    <td>{{ location.libraryName }}</td>
    <td>
      <button class="btn btn-outline-dark"
      v-on:click="this.$router.push({name: 'libraryAdminRoute'})" >Vaata{{location.libraryId}}</button>
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