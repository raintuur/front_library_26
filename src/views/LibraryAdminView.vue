<template>
  <div>
      <h1>
        Keskraamatukogu ID:
      </h1>

  </div>

</template>

<script>
export default {
  name: 'LibraryAdminView',
  data: function () {
    return{
      adminId: sessionStorage.getItem('userId')
    }

  }
}
</script>

