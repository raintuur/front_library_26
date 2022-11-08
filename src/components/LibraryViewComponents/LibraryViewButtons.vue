<template>
  <div>
    <div class="row">
      <button v-on:click="buttonAllpressed" type="button" class="btn btn-success">Kõik</button>
    </div>
    <div v-for="libraryCity in libraryCities" class="row mt-3">
      <button v-on:click="buttonOtherPressed(libraryCity.cityId)" v-model="libraryCity.cityId"
              type="button" class="btn btn-success">{{ libraryCity.cityName }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LibraryViewButtons',
  data: function () {
    return {
      libraryCities: [
        {
          cityName: '',
          cityId: 0
        }
      ],
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

    buttonAllpressed: function () {
      this.$emit('buttonAllPressed')
    },

    buttonOtherPressed: function (libraryCityId) {
      this.$emit('buttonOtherPressed', libraryCityId)
    }
  },

  beforeMount() {
    this.getLibraryCityInfo()
  }
}
</script>
