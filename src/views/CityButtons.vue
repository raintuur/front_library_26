<template>

  <div class="d-grid gap-2 col-6 mx-auto">
   <div> <button class="btn btn-primary" type="button">Kõik</button> </div>

    <div v-for="city in cities">
      <button class="btn btn-primary" type="button">{{city.cityName}}</button>
    </div>

  </div>


</template>
<script>
export default {
  name: 'CityButtons',
  props: {
    cities: {}
  }
}
</script>
