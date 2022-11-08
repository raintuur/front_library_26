<template>
  <div>

    <div class="container">
      <div class="row justify-content-start">
        <CityButtons/>
      </div>
    </div>
  </div>

</template>

<script>
import CityButtons from "@/components/CityButtons";

export default {
  name: "CityView",
  components: {CityButtons},

}
</script>

