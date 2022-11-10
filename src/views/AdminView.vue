<template>
  <div>
    <h1> Raamatukogu nimi ja ID:?</h1>
      <div v-if="notification !== undefined" class="alert alert-danger" role="alert">
        {{notification}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'AdminView',
  data: function () {
    return {
      libraryName: sessionStorage.getItem('libraryName'),
      libraryId: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification')
    }
  }
}
</script>
