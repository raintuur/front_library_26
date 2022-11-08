<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col col-lg-3">


        <CityButtons :cities="cities"/>

      </div>
    </div>


  </div>

</template>

<script>
import CityButtons from "@/views/CityButtons";

export default {
  name: "LibraryView",
  components: {CityButtons},
  
  data:function (){
    return {
      cities: [
        {
          cityName:'',
          cityId: 0
        }
      ]
    }
  },
  
  methods: {

    getLibraryCityName: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.cities = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },


  },

  beforeMount() {
    this.getLibraryCityName()
  }
}
</script>

