<template>

  <div>
    <div>
      <h1>{{ libraryName }} id: {{ libraryId }}</h1>
    </div>
    <div v-if="errorMessage.length > 0 && errorMessage != 'undefined'" class="alert alert-danger" role="alert">
      {{errorMessage}}
    </div>
  </div>

</template>

<script>
export default {
  name: "AdminHomeView",
  data: function () {
    return {
      libraryId: this.$route.query.libraryId,
      libraryName: sessionStorage.getItem('libraryName'),
      errorMessage: sessionStorage.getItem('errorMessage')
    }
  }
}
</script>

