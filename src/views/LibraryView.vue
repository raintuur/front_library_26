<template>
  <div class="row">
    <div class="col-lg-3">
      <CitiesSelection/>
    </div>
  </div>
</template>

<script>
import CitiesSelection from "@/components/library_components/CitiesSelection";

export default {
  name: "LibraryView.vue",
  components: {CitiesSelection},

}
</script>

