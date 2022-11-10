<template>
  <div>
    <h1>{{ libraryName }} id: {{ libraryId }}</h1>

    <AlertError :message="message"/>

  </div>

</template>

<script>


import AlertError from "@/components/alert/AlertError";

export default {
  name: 'LibrariesAdminView',
  components: {AlertError},
  data: function () {
    return {
      libraryId: this.$route.query.libraryId,
      libraryName: sessionStorage.getItem('libraryName'),
      notification: sessionStorage.getItem('notification'),
      message: '',
    }
  },
  mounted() {
    if (this.notification !== 'undefined')
      this.message = this.notification
  }
}
</script>
