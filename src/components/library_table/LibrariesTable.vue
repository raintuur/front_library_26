<template>
  <table class="table table-dark table-hover">
    <LibrariesTableHead/>
    <LibrariesTableBody :library-info="libraryInfo"/>
  </table>
</template>
<script>
import LibrariesTableHead from "@/components/library_table/LibrariesTableHead";
import LibrariesTableBody from "@/components/library_table/LibrariesTableBody";

export default {
  name: 'LibrariesTable',
  components: {LibrariesTableBody, LibrariesTableHead},
  data: function () {
    return {
      libraryInfo: [
        {
          cityName: '',
          libraryName:'',
          libraryId: 0
        }
      ]
    }
  },
  methods: {
    getlibraryInfo: function () {
      this.$http.get("/library/city-list/all")
          .then(response => {
            this.libraryInfo = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getlibraryInfo()
  }
}
</script>