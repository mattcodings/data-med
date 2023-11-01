<template>
  <div v-show="header == activeHeader" class="content"><slot /></div>
</template>
<script>
import { inject } from 'vue'
export default {
  props: ['header'],
  setup() {
    const activeHeader = inject('activeHeader')
    return {
      activeHeader
    }
  }
}
</script>
<style>
.content {
  border: 5px solid black;
}
</style>
