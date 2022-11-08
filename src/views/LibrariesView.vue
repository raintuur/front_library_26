<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-3">
          <CitiesButtons/>
        </div>
        <div class="col col-lg-9">
          <LibrariesTable :libraries="libraries"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CitiesButtons from "@/components/CitiesButtons";
import LibrariesTable from "@/components/LibrariesTable";


export default {
  name: "LibrariesView",
  components: {LibrariesTable, CitiesButtons},
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
          .catch(error => {
            console.log(error)
          })
    }

  },
  beforeMount() {
    this.getLibrariesInfo()
  }
}
</script>

