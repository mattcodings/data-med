<template>
  <div class="tabs">
    <ul class="tabs-header">
      <li
        v-for="header in tabHeaders"
        :key="header"
        :class="{ selected: header == activeHeader }"
        @click="activeHeader = header"
      >
        {{ header }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
import { ref, provide } from 'vue'

export default {
  setup(props, { slots }) {
    const tabHeaders = ref(slots.default().map((TabItem) => TabItem.props.header))
    const activeHeader = ref(tabHeaders.value[0])
    provide('activeHeader', activeHeader)
    return {
      tabHeaders,
      activeHeader
    }
  }
}
</script>
<style scoped>
.tabs {
  width: 80%;
}
.tabs-header {
  display: flex;
  list-style-type: none;
}
.tabs-header li {
  border: 1px solid black;
  width: 33%;
  border-radius: 20px;
  text-align: center;
}
.selected {
  background-color: #222;
  color: white;
}
</style>
