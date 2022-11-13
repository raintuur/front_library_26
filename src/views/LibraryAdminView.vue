<template>
  <div>
    <h1>{{ libraryName }} id: {{libraryID}}</h1>
    <div>
      <Notification :message="message" :notification="notification"/>
    </div>
  </div>
</template>

<script>
import Notification from "@/components/alert/Notification";

export default {
  name: "LibraryAdminView",
  components: {Notification},
  data: function () {
    return {
      message: '',
      libraryName: sessionStorage.getItem('libraryName'),
      libraryID: this.$route.query.libraryId,
      notification: sessionStorage.getItem('notification')
    }
  },
  mounted() {
    if (this.notification !== 'undefined') {
      this.message = this.notification
    }
  }
}
</script>

