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
    <tr v-for="library in libraries">
      <td>{{library.libraryCity}}</td>
      <td>{{library.libraryName}}</td>
      <td>
        <button type="button" class="btn btn-outline-primary"> Vaata {{library.libraryID}}</button>
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
  }
}
</script>
