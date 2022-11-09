<template>
  <tbody>
  <tr v-for="libraryLocation in libraryLocations" :key="libraryLocation.libraryId">
    <th scope="row">{{ libraryLocation.cityName }}</th>
    <td>{{ libraryLocation.libraryName }}</td>
    <td>
      <button type="button" class="btn btn-outline-success">Vaata {{libraryLocation.libraryId}}</button>
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