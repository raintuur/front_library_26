<!--<template>-->
<!--  <div>-->

<!--    <table class="table table-success table-striped-columns" style=margin-left:100px>-->

<!--            <thead>-->
<!--            <tr>-->
<!--              <th scope=col>Linn</th>-->
<!--              <th scope=col>Nimi</th>-->
<!--              <th scope=col> </th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="citiesAndLibraries in libraries">-->
<!--        <td>{{citiesAndLibraries.cityName}}</td>-->
<!--        <td>{{citiesAndLibraries.libraryName}}</td>-->
<!--        <td><button type="button" class="btn btn-warning">Vaata{{citiesAndLibraries.libraryId}}</button></td>-->

<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->



<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  name: 'CityLibraryTable',-->
<!--  data: function () {-->
<!--    return{-->
<!--      libraries: [-->
<!--        {-->
<!--          cityName: '',-->
<!--          libraryName: '',-->
<!--          libraryId: 0-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    getLibraryNames: function () {-->
<!--      this.$http.get("/library/city-list/all")-->
<!--          .then(response => {-->
<!--            this.libraries = response.data-->
<!--          })-->
<!--          .catch(error => {-->
<!--            console.log(error)-->
<!--          })-->
<!--    },-->
<!--  },-->
<!--  beforeMount() {-->
<!--    this.getLibraryNames()-->
<!--  }-->

<!--}-->
<!--</script>-->