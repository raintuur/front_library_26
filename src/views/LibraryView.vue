<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-lg-3">

          <LibraryCityButton/>

      </div>
    </div>
    </div>
  </div>

</template>
<script>

import LibraryCityButton from "@/components/LibraryCityButton";

export default {
  name: 'Buttons',
  components: {LibraryCityButton},
  data: function () {
    return {
      cities: [
        {
          cityName: '',
          CityId: 0
        }
      ]
    }
  }
}

methods: {

}


</script>

