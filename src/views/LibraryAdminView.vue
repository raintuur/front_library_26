<template>
  <div>
    <div class="row row-cols-1 justify-content-center">
      <div class="col d-flex justify-content-center">
        <h1>{{ libraryName }} id: {{ libraryId }}</h1>
      </div>
      <div class="w-100"></div>
      <div class="col d-flex justify-content-center">
        <div v-if="notification !== 'undefined'" class="row alert alert-danger" role="alert">
          {{ notification }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryAdminView',
  data: function () {
    return {
      libraryName: sessionStorage.getItem('libraryName'),
      notification: sessionStorage.getItem('notification'),
      libraryId: this.$route.query.libraryId
    }
  }
}
</script>
