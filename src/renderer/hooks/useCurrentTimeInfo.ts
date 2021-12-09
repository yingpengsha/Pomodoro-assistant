import { useNow } from "@vueuse/core";
import { computed } from "vue-demi";

export default function useCurrentTimeInfo() {
  const now = useNow()
  const hours = computed(() => now.value.getHours())
  const minutes = computed(() => now.value.getMinutes())
  const seconds = computed(() => now.value.getSeconds())
  return {
    hours,
    minutes,
    seconds
  }
}