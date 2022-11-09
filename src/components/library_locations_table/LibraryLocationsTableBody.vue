<template>
  <tbody>
  <tr v-for="location in libraryLocations">
    <td>{{ location.cityName }}</td>
    <td>{{ location.libraryName }}</td>
    <td>
      <button class="btn btn-outline-dark">Vaata{{location.libraryId}}</button>
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