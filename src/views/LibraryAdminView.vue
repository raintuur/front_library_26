<template>
  <div>
    <h1>
      {{libraryName}} id: {{libraryId}}
    </h1>
    <div>
      <div v-if="notification !== 'undefined'" class="alert alert-danger" role="alert">
        {{ notification }}
      </div>
    </div>


  </div>

</template>

<script>
export default {
  name: 'LibraryAdminView',
  props: {

  },
  data: function () {
    return{


      libraryName: sessionStorage.getItem('libraryName'),
      libraryId: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification'),




    }

  }
}
</script>