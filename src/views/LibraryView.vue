<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-2">
          <LibraryCityButtons/>
        </div>
        <div class="col col-lg-9">
          <LibraryLocationsTable/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LibraryCityButtons from "@/components/LibraryCityButtons";
import LibraryLocationsTable from "@/components/LibraryLocationsTable";

export default {
  name: "LibraryView",
  components: {LibraryLocationsTable, LibraryCityButtons},
  data: function () {
    return {
      libraryLocations: [
        {
          cityName: '',
          libraryName: '',
          libraryId: 0
        }
      ]
    }
  }


}
</script>

