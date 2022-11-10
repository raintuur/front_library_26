<template>
  <div>
    <div v-if="errorMessage !== 'undefined'"
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