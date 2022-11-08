<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-3">
          <CitiesButtons/>
        </div>
        <div class="col col-lg-9">
          <table class="table table-dark table-hover">
            <thead>
            <tr>
              <th scope="col">Linn</th>
              <th scope="col">Nimi</th>
              <th scope="col" ></th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="library in libraries">
              <td>{{library.libraryCity}}</td>
              <td>{{library.libraryName}}</td>
              <td><button type="button" class="btn btn-outline-primary"> Vaata </button></td>
            </tr>
            </tbody>

          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CitiesButtons from "@/components/CitiesButtons";


export default {
  name: "LibrariesView",
  components: { CitiesButtons},
  data: function () {
    return {
    libraries: [
      {
        libraryCity: '',
        libraryID: 0,
        libraryName: ''
      }
    ]
  }
  },
  methods: {
    getLibrariesInfo: function () {
      this.$http.get('/library/city-list/all')
          .then(result=> {
            this.libraries = result.data
          })

    }

  },
  beforeMount() {
    this.getLibrariesInfo()
  }
}
</script>

<style scoped>

</style>