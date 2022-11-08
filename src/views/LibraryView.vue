<template>
  <div class="container">

    <div class="justify-content-start">

      <div class="col col-lg-4">
        <div>
          <button type="button" class="btn btn-primary col-lg-4">Kõik</button>
        </div>

        <div>
          <LocationButtons :library-locations="libraryLocations"/>
        </div>

      </div>


    </div>

  </div>


</template>

<script>
import LocationButtons from "@/components/LocationButtons";

export default {
  name: "LibraryView",
  components: {LocationButtons},

}
</script>
