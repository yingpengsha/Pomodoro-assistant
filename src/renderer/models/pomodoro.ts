import { reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLayoutStore } from './layout'
import { ClockType } from '@/constants/clocks'
import { useCountDown } from '@vant/use'

export const usePomodoroStore = defineStore('pomodoro', () => {
  const layoutStore = useLayoutStore()
  const isIng = ref(false)
  const activity = ref<ClockType>()

  // ======================== create ========================
  const create = (clock: ClockType) => {
    if (isIng.value) return false
    layoutStore.leftSider.close()
    countDown.reset(clock.minTime)
    countDown.start()
    activity.value = clock
    return isIng.value = true
  }

  // ======================== count down ========================
  const countDown = useCountDown({
    time: 0,
    onFinish: () => {
      finish()
    }
  })

  // ======================== toggle ========================
  const isPause = ref(false)
  const toggle = (target = !isPause.value) => {
    if (!isIng) return false
    isPause.value = target
    if (target) {
      countDown.pause()
    } else {
      countDown.start()
    }
  }

  // ======================== finish ========================
  const finish = () => {
    if (!isIng.value) return false
    isIng.value = false
    isPause.value = false
    activity.value = undefined
    return true
  } 

  return {
    isIng,
    isPause,
    countDown: countDown.current,
    activity,
    actions: {
      create,
      toggle,
      finish,
    }
  }
})