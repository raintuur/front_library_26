<template>
  <div>

    <div class="row">

      <div class="col-2">
        <LibrariesButtons/>
      </div>

      <div class="col-8">
        <table class="table table-success table-striped">
          <LibrariesTableHead/>
          <LibrariesTableBody :libraries-info="librariesInfo"/>
        </table>

      </div>
    </div>

  </div>
</template>

<script>
import LibrariesButtons from "@/components/library_components/LibrariesButtons";
import LibrariesTableHead from "@/components/library_locations_table/LibrariesTableHead";
import LibrariesTableBody from "@/components/library_locations_table/LibrariesTableBody";

export default {
  name: "LibrariesView",
  components: {LibrariesTableBody, LibrariesTableHead, LibrariesButtons},
  data: function () {
    return {
      librariesInfo:
          [
            {
              cityName: '',
              libraryName: '',
              libraryId: 0
            }
          ]
    }
  },
  methods: {

    getAllLibrariesLocationsInfoById: function () {

      let preference = ''
      {
        switch (cityId) {
          case 15:
            preference = 'code=200, example=200 - Tallinn'
            break;
          case 21:
            preference = 'code=200, example=200 - Tartu'
            break;
          case 23:
            preference = 'code=200, example=200 - Pärnu'
            break;
        }
      }


        this.$http.get("/library/city-list/by-city-id", {
          params: {cityId: '15'},
          headers: {
            'Content-Type': 'application/json',
            Prefer: preference

        }
      }
    ).
      then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      });
    },

    getAllLibrariesLocationInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.librariesInfo = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
    ,
  },
  beforeMount() {
    this.getAllLibrariesLocationInfo()
    this.getAllLibrariesLocationsInfoById()
  }
}
</script>

