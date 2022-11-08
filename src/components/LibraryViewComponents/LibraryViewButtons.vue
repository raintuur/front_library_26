<template>
  <div>
    <div class="row">
      <button v-on:click="$emit('buttonAllPressed')" type="button" class="btn btn-success">Kõik</button>
    </div>
    <div v-for="libraryCity in libraryCities" class="row mt-3">
      <button v-on:click="$emit('buttonOtherPressed',libraryCity.cityId)" v-model="libraryCity.cityId"
              type="button" class="btn btn-success">{{libraryCity.cityName}}</button>
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
