<template>
  <div class="row">
    <div class = "container">
      <div class="col col-lg-8">
        <LibrariesButtons/>
      </div>
    </div>
  </div>
</template>

<script>
import LibrariesButtons from "@/components/LibrariesButtons";

export default {
  name: 'LibrariesView',
  components: {LibrariesButtons},

}

</script>
