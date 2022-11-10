<template>
  <div>
    <div v-if="errorMessage.length > 0 && errorMessage !== 'undefined'"
         class="alert alert-danger" role="alert">
      {{errorMessage}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'AlertMessage',
  props: {
    errorMessage: {}
  }
}
</script>