<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Linn</th>
      <th scope="col">Nimi</th>
      <th scope="col"></th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="library in libraries" :key="libraries.libraryId">
      <td>{{library.cityName}}</td>
      <td>{{library.libraryName}}</td>
      <td>
        <button type="button" class="btn btn-outline-primary"
                v-on:click="navigateToLibraryView(library.libraryName, library.libraryId)"
        > Vaata {{library.libraryId}}</button>
      </td>
    </tr>
    </tbody>

  </table>
</template>
<script>
export default {
  name: 'LibrariesTable',
  props: {
    libraries: {}
  },
  methods: {
    navigateToLibraryView: function () {
      this.$router.push({name:'libraryAdminRoute'})
      
    }
  }
}
</script>
