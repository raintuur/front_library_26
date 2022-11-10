<template>
  <div v-if="message.length > 0" class="row alert alert-danger" role="alert">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'AlertError',
  props: {
    message: {}
  },
}
</script>