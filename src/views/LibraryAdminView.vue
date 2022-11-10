<template>
  <div>
Administraatori vaade

    <h1>{{libraryName}}  id: {{libraryId}}</h1>
    <div>
<!--    siia footstrapist alert div alert alert-danger-->v-if true/false
    </div>

  </div>
</template>,

<script>
export default {
  name: "LibraryAdminView",
  data: function () {
    return {
      libraryId: sessionStorage.getItem(),
      notificationMessage: ''
    }

  },

}
</script>

