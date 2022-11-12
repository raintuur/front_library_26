<template>
  <tbody>
  <tr v-for="location in librariesInfo" :key="location.libraryId">
    <td>{{location.cityName}}</td>
    <td>{{location.libraryName}}</td>
    <td>
      <button type="button" class="btn btn-warning">Vali {{location.libraryId}}</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'LibrariesTableBody',
  props: {
    librariesInfo: {}
  }
}
</script>