<template>
  <div>
    <button type="button" class="col-xs-12 col-sm-4 text-center res-pad same-width-button btn btn-outline-dark">
      Kõik
    </button>
    <div class="row m-1">
    </div>
    <button type="button" class="col-xs-12 col-sm-4 text-center res-pad same-width-button btn btn-outline-dark">
      Tallinn
    </button>
    <div class="row m-1">
    </div>
    <button type="button" class="col-xs-12 col-sm-4 text-center res-pad same-width-button btn btn-outline-dark">
      Tartu
    </button>
    <div class="row m-1">
    </div>
    <button type="button" class="col-xs-12 col-sm-4 text-center res-pad same-width-button btn btn-outline-dark">
      Pärnu
    </button>
  </div>

</template>
<script>
export default {
  name: 'LibraryCityButton',
  data: function () {
    return {
      selectedCityId: 0,
      libraryName: '',
      cities: [
        {
          cityName: '',
          CityNameId: 0
        }
      ]
    }
  },
  methods: {
    getLibrariesCityButtonInfo: function () {
      this.$http.get('/library/city-list')
          .then(result => {
            this.cities = result.data
          })
          .catch(error => {
            alert ('VIGA!')
            console.log('Vastuseks on viga!')
          }),
      },

    clickSelectCityEvent: function () {
      this.$emit('clickSelectCityEvent' , this.SelectedCityId)
    }
  },
  beforeMount() {
    this.getLibrariesCityButtonInfo()
  }

}
</script>
