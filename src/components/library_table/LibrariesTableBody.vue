<template>
  <tbody>
  <tr v-for="libraryTable in libraryInfo" :key="libraryTable.libraryId">
    <td>{{ libraryTable.cityName }}</td>
    <td>{{ libraryTable.libraryName }}</td>
    <td>
      <button v-on:click="navigateToLibraryView(libraryTable)" type="button" class="btn btn-light">
        {{ libraryTable.libraryId }}
      </button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'LibrariesTableBody',
  props: {
    libraryInfo: {},
  },
  methods: {
    navigateToLibraryView: function (libraryTable) {

      sessionStorage.setItem('notification', libraryTable.notification)
      sessionStorage.setItem('libraryName', libraryTable.libraryName)
      this.$router.push({
        name: 'librariesAdminRoute', query: {
          libraryId: libraryTable.libraryId
        }
      })
    }
  }
}
</script>