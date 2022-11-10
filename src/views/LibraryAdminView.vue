<template>

  <div>
    <div>
      <h1>{{ libraryName }} id: {{ libraryId }}</h1>
    </div>
    <AlertMessage :error-message="errorMessage"/>
  </div>

</template>

<script>
import AlertMessage from "@/views/AlertMessage";

export default {
  name: "AdminHomeView",
  components: {AlertMessage},
  data: function () {
    return {

      libraryName: sessionStorage.getItem('libraryName'),
      errorMessage: sessionStorage.getItem('errorMessage'),
      libraryId: this.$route.query.libraryId
    }
  }
}
</script>

