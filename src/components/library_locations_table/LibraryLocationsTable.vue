<template>
  <div>
    <table class="table table-success table-bordered table-hover">
      <LibraryLocationsTableHead/>
      <LibraryLocationsTableBody :library-locations="libraryLocations"/>
    </table>
  </div>

</template>
<script>
import LibraryLocationsTableHead from "@/components/library_locations_table/LibraryLocationsTableHead";
import LibraryLocationsTableBody from "@/components/library_locations_table/LibraryLocationsTableBody";

export default {
  name: 'LibraryLocationsTable',
  components: {LibraryLocationsTableBody, LibraryLocationsTableHead},
  props: {
    libraryLocations: {}
  }
}
</script>