<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col col-lg-2">
          <LibraryCityButtons/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LibraryCityButtons from "@/components/LibraryCityButtons";

export default {
  name: "LibraryView",
  components: {LibraryCityButtons},
  data: function () {
    return {}
  }

}
</script>

