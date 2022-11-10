<template>
  <div>
    <div class="row row-cols-1 justify-content-center">
      <div class="col d-flex justify-content-center">
        <h1>{{ libraryName }} id: {{ libraryId }}</h1>
      </div>
      <div class="w-100"></div>
      <div class="col d-flex justify-content-center">
        <ErrorAlert :message="message"/>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorAlert from "@/components/LibraryViewComponents/ErrorAlert";

export default {
  name: 'LibraryAdminView',
  components: {ErrorAlert},
  data: function () {
    return {
      message: '',
      libraryName: sessionStorage.getItem('libraryName'),
      notification: sessionStorage.getItem('notification'),
      libraryId: this.$route.query.libraryId
    }
  },

  mounted() {
    if (this.notification !== 'undefined') {
      this.message = this.notification
    }
  }
}
</script>
