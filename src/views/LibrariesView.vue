<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-3">
          <CitiesButtons/>
        </div>
        <div class="col col-lg-9">
        <LibraryLocationTable/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CitiesButtons from "@/components/CitiesButtons";
import LibraryLocationTable from "@/components/LibraryLocationTable";

export default {
  name: "LibrariesView",
  components: {LibraryLocationTable, CitiesButtons},
}
</script>

<style scoped>

</style>