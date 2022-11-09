<template>
  <tbody>
  <tr v-for="location in  libraryLocations">
    <td>{{location.libraryName}}</td>
    <td>{{location.libraryName}}</td>
    <td>
      <button type="button" class="btn btn-warning">Vaata{{location.libraryId}}</button>
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