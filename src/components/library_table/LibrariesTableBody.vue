<template>
  <tbody>
  <tr v-for="library in libraryInfo" :key="library.libraryId">
    <td>{{library.cityName}}</td>
    <td>{{library.libraryName}}</td>
    <td>
      <button type="button" class="btn btn-light">{{ library.libraryId }}</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'LibrariesTableBody',
  props: {
    libraryInfo: {
    }
  }
}
</script>