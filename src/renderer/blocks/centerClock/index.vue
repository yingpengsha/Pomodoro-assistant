<template>
  <div class="container">
    <div
      class="background"
      :style="{ background: pomodoroStore.activity?.color || 'white' }"
    ></div>
    <div :class="{ 'flip-container': true, back: pomodoroStore.isIng }">
      <div class="front">
        <Clock />
      </div>
      <div class="back">
        <div class="count-down">
          <span>{{ countDownText }}</span>
        </div>
      </div>
    </div>
    <div v-show="pomodoroStore.isIng" class="actions">
      <div class="control" @click="() => pomodoroStore.actions.toggle()">
        <n-icon size="40" color="white">
          <Play v-if="pomodoroStore.isPause" />
          <Pause v-else/>
        </n-icon>
      </div>
      <div class="control" @click="() => pomodoroStore.actions.finish()">
        <n-icon size="40" color="white"><Stop /></n-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePomodoroStore } from '@/models/pomodoro'
import Clock from '@/components/Clock/index.vue'
import { CurrentTime } from '@vant/use'
import { NIcon } from 'naive-ui'
import { Play, Pause, Stop } from '@vicons/ionicons5'
const pomodoroStore = usePomodoroStore()

const countDownText = computed(() => {
  const keys: (keyof CurrentTime)[] = ['hours', 'minutes', 'seconds']
  return keys
    .map((key) => ('00' + pomodoroStore.countDown[key]).substr(-2))
    .join(':')
})
</script>

<style lang="less" scoped>
.container {
  box-sizing: border-box;
  padding: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 40px;
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.6;
    background: white;
    transition: all .3s;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-top: 50vh;

    .control {
      width: 80px;
      height: 80px;
      border: 2px solid white;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }
  }

  .flip-container {
    width: 55vh;
    height: auto;
    position: relative;
    transform-style: preserve-3d;

    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
    }

    .front {
      transform: perspective(800px) rotateY(0deg);
      backface-visibility: hidden;
      transition: all 500ms ease;
    }

    .back {
      transform: rotateY(-180deg);
      backface-visibility: hidden;
      transition: all 500ms ease;

      .count-down {
        widows: 100%;
        padding-bottom: 100%;
        border: 2px solid white;
        border-radius: 100%;
        position: relative;

        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 100;
          font-weight: 900;
          color: white;
        }
      }
    }
  }
  .back {
    .front {
      transform: perspective(800px) rotateY(180deg);
    }

    .back {
      transform: perspective(800px) rotateY(0deg);
    }
  }
}
</style>
