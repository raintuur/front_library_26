<template>
  <div>
    <h1>{{libraryName}} id: {{libraryId}}</h1>
    <AlertError :message="message"/>
  </div>
</template>

<script>
import AlertError from "@/components/alert/AlertError";


export default {
  name: 'LibraryAdminView',
  components: {AlertError},
  data: function () {
    return {
      someNumber: 0,
      libraryName: sessionStorage.getItem('libraryName'),
      libraryId: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification'),
      message: '',
    }
  },
  mounted() {
    if (this.notification !== 'undefined') {
      this.message = this.notification
    }
  }

}
</script>
