<template>
  <div>
      <h3>{{ libraryName }} id: {{libraryId}}</h3>
    <div v-if="notification === 'undefined'" class="alert alert danger" role="alert">
      {{notification}}
    </div>

  </div>
</template>

<script>
export default {
  name: "LibraryAdminView",
  data: function () {
    return {
      libraryName: sessionStorage.getItem('libraryName'),
      libraryId: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification'),
      message: '',

    }
  },
  mounted() {
    if (this.notification !== 'undefined') {

    }
  }
}
</script>
