<template>
  <div>
    <div class="row">
      <button type="button" class="btn btn-success">Kõik</button>
    </div>
    <div v-for="libraryCity in libraryCities" class="row mt-3">
      <button type="button" class="btn btn-success">{{libraryCity.cityName}}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LibraryViewButtons',
  props: {
    libraryCities: {},
  }
}
</script>
