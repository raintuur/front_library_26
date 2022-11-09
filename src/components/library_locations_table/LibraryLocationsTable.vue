<template>

  <table class="table">
    <LibraryLocationsTableHead/>
    <LibraryLocationsTableBody :library-locations="libraryLocations"/>
  </table>

</template>
<script>
import LibraryLocationsTableHead from "@/components/LibraryLocationsTableHead";
import LibraryLocationsTableBody from "@/components/library_locations_table/LibraryLocationsTableBody";

export default {
  name: 'LibraryLocationsTable',
  components: {LibraryLocationsTableBody, LibraryLocationsTableHead},
  props: {
    libraryLocations: Array()
  }
}
</script>