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
  props: {
    libraryInfo: {},
  }
}
</script>