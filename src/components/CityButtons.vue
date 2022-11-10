<template>
  <div class="d-grid gap-3 col-5 mx-auto">
    <button class="btn btn-primary" type="button">Kõik</button>
    <button v-for="city in cities" class="btn btn-primary" type="button">{{city.cityName}}</button>

  </div>
</template>
<script>
export default {
  name: 'CityButtons',
  data: function () {
    return {
      cities: [
        {
          cityName: 'Tallinn',
          cityId: 15
        },
        {
          cityName: 'Tartu',
          cityId: 21
        },
        {
          cityName: 'Pärnu',
          cityId: 23
        },
      ]
    }
  }
}
</script>