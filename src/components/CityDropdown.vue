<template>
 <div>

  <select class="form-select" aria-label="Default select example">
    <option selected disabled value="0">Kõik</option>
    <option v-for="city in cities" :key="city.cityNameID" :value="city.cityNameID">{{city.cityName}}</option>
  </select>
  </div>
</template>
<script>
export default {
  name: 'CityDropdown',
  data: function () {
    return {
      cities: [
          {
        cityName:'Tallinn',
        cityNameID: 15
      },
        {
          cityName:'Tartu',
          cityNameID: 21
        },
        {
          cityName:'Pärnu',
          cityNameID: 23
        },
      ]

    }

  }

}
</script>
