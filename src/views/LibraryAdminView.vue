<template>
  <div>
      <h1>
        Keskraamatukogu ID:{{libraryId}}
      </h1>

  </div>

</template>

<script>
export default {
  name: 'LibraryAdminView',
  data: function () {
    return{
      libraryId: this.$route.query.libraryId,
      libraryName: sessionStorage.getItem('libraryName')


    }

  }
}
</script>

