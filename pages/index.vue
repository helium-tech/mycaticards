<template>
  <div>
    <h1>Bienvenue ici chez cati</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: ["caticards"]
})
</script>
x