<template>
  <div>
    <h1>{{ libraryName }} id: {{ libraryId }}</h1>
    <h3>
      <AlertMessage :message="message"/>
    </h3>
  </div>
</template>

<script>
import AlertMessage from "@/components/library_locations_table/AlertMessage";

export default {
  name: 'LibraryAdminView',
  components: {AlertMessage},
  data: function () {
    return {
      libraryName: sessionStorage.getItem('libraryName'),
      notification: sessionStorage.getItem('notification'),
      libraryId: this.$route.query.libraryId,
      message: ''
    }
  },
  mounted() {
    if (this.notification !== 'undefined') {
      this.message = this.notification
    }
  }
}
</script>
