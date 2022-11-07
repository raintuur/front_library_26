<template>
  <div class="container">
    <div class="row">
      <div class="col col-2">
        <LibraryViewButtons :library-cities="libraryCities"/>
      </div>
    </div>
  </div>
</template>

<script>
import LibraryViewButtons from "@/components/LibraryViewComponents/LibraryViewButtons";

export default {
  name: "LibraryView",
  components: {LibraryViewButtons},

  data: function () {
    return {
      libraryCities: [
        {
          cityName:'',
          cityId: 0
        }
      ]
    }
  },

  methods: {
    getLibraryCityInfo: function () {
      this.$http.get("/library/city-list")
          .then(response => {
            this.libraryCities = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },

  beforeMount() {
    this.getLibraryCityInfo()
  }
}
</script>

