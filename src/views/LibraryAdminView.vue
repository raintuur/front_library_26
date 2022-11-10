<template>
  <div>
    <h1>{{libraryName}}</h1>
    <h3>ID: {{libraryId}}</h3>
    <div v-if="notification != 'undefined'" class="alert alert-danger">
      {{ notification }}
    </div>

  </div>
</template>

<script>
export default {
  name: "LibraryAdminView",
  data: function () {
    return {
      notification: sessionStorage.getItem('notification'),
      libraryName: this.$route.query.libraryName,
      libraryId: this.$route.query.libraryId
    }
  },
}
</script>
