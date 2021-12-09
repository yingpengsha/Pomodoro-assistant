import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const isLeftCollapsed = ref(false)
  const close = () => isLeftCollapsed.value = true
  const open = () => isLeftCollapsed.value = false

  return {
    leftSider: {
      isCollapsed: isLeftCollapsed,
      close,
      open
    }
  }
})