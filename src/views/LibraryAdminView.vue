<template>
  <div>
  <div>
  <h1> {{libraryName}} id: </h1>
  <div v-if="notification !== 'undefined'" class="alert alert-danger" role="alert">alert</div>
    {{ notification }}
  </div>
    <input v-on:change="isNumberCheck" -v-model="someNumber" type="text"/>
  </div>
</template>

<script>
export default {
  name: "LibraryAdminView",
  data: function () {
    return{
      someNumber: 0,
      libraryName: sessionStorage.getItem('libraryName'),
      libraryId: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification')
    }
  },
  methods: {
    isNumberCheck: function () {
      var num1 = this.someNumber;
      if (isNaN(num1)){
        alert(num + "is not a number");
      }else{
        alert(num + "is not number");
      }

    }
  }
}
</script>

