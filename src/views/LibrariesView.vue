<template>
  <div class="row justify-content-center">

    <div class="col col-lg-3">
      <LibrariesButtons/>
    </div>

    <div class="col-lg-4">
      <LibrariesTable/>
    </div>

  </div>
</template>

<script>
import LibrariesButtons from "@/components/LibrariesButtons";
import LibrariesTable from "@/components/library_table/LibrariesTable";

export default {
  name: 'LibrariesView',
  components: {LibrariesTable, LibrariesButtons},

}

</script>
