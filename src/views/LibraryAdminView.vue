<template>
<div>
  <h1> {{libraryName}} id: {{libraryId}}</h1>
  <div class="row justify-content-center">
    <div class="col-lg-5">
      <AlertError :message="message"/>

    </div>
  </div>
</div>
</template>

<script>
import AlertError from "@/components/alert/AlertError";
export default {
  name: 'LibraryAdminView',
  components: {AlertError},

  data: function () {
    return {
      libraryId: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification'),
      libraryName: sessionStorage.getItem('libraryName'),
      message: ''
    }

  },
  beforeMount() {
    if (this.notification != 'undefined') {
      this.message = this.notification
    }
  }
}
</script>
