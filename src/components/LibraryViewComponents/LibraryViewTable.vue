<template>
  <table class="table table-striped table-success">
    <thead>
    <tr>
      <th scope="col">Linn</th>
      <th scope="col">Nimi</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="libraryLocation in libraryLocations" :key="libraryLocation.libraryId">
      <td>{{libraryLocation.cityName}}</td>
      <td>{{ libraryLocation.libraryName }}</td>
      <td>
        <button type="button" class="btn btn-sm btn-outline-success">Vaata</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'LibraryViewTable',
  props: {
    libraryLocations: {}
  }
}
</script>