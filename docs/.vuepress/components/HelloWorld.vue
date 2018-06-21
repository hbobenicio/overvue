<template lang="html">
  <div class="HelloWorld">
    <p>{{ saudacao }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      saudacao: 'Hello, World!'
    }
  }
}
</script>

<style scoped>
  p {
    text-align: center;
  }
</style>
