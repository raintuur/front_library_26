<template>
  <div>

    <div class="container">
      <div class="row justify-content-start">
        <div class="col-2">

          <CityButtons/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import CityButtons from "@/components/CityButtons";

export default {
  name: "LibrariesView",
  components: {CityButtons},

</script>