<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary col-lg-4">Kõik</button>
    </div>
    <div v-for="city in cities">
      <button type="button" class="btn btn-outline-primary col-lg-4">
        {{ city.cityName }}
      </button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'LocationButtons',
  props: {
    cities: {}
  }

}
</script>