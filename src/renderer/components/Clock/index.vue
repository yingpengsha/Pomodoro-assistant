<template>
  <div class="clock-container">
    <div class="clock" @click="clockClick">
      <div class="clock-background" :style="{backgroundColor: props.backgroundColor}"></div>
      <div class="clock-face">
        <div
          v-for="n in 60"
          :key="n"
          class="clock-notch"
          :class="{ '-long': !(n % 5) }"
          :style="{ transform: `rotate(${n * 6}deg)` }"
        ></div>
      </div>

      <span class="clock-hand -seconds" :style="styles.seconds"></span>
      <span class="clock-hand -minutes" :style="styles.minutes"></span>
      <span class="clock-hand -hours" :style="styles.hours"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import useCurrentTimeInfo from "../../hooks/useCurrentTimeInfo";

const props = defineProps({
  backgroundColor: String
})

const { hours, minutes, seconds } = useCurrentTimeInfo();
const rotation = computed(() => ({
  hours: hours.value * 30 + minutes.value * 0.5,
  minutes: minutes.value * 6 + seconds.value * 0.1,
  seconds: seconds.value * 6,
}));
const styles = computed(() => ({
  hours: {
    transform: `translate3d(-50%, 0, 0) rotate(${rotation.value.hours}deg)`,
  },
  minutes: {
    transform: `translate3d(-50%, 0, 0) rotate(${rotation.value.minutes}deg)`,
  },
  seconds: {
    transform: `translate3d(-50%, 0, 0) rotate(${rotation.value.seconds}deg)`,
  },
}));


const emit = defineEmits(['click'])
const clockClick = (payload: MouseEvent) => {
  emit('click', payload)
}
</script>

<style lang="less" scoped>
.clock-container {
  width: 100%;
  padding-bottom: 100%;
  position: relative;

  .clock-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 100%;
    opacity: .2;
  }

  .clock {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 100%;
    background-color: white;
    filter: drop-shadow(0 0.125rem 0.5rem rgba(black, 0.1));

    &::after {
      top: 50%;
      left: 50%;
      content: "";
      width: 2.5%;
      height: 2.5%;
      position: absolute;
      border-radius: 100%;
      background-color: #ed2a4a;
      transform: translate3d(-50%, -50%, 0);
    }

    &-face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-notch {
      transform-origin: 50% 100%;
      position: absolute;
      width: 1px;
      height: 49%;
      bottom: 50%;
      left: 50%;

      &::after {
        content: "";
        width: 100%;
        height: 2.5%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #6b95ab;
      }

      &.-long::after {
        width: 2px;
        height: 7.5%;
      }
    }

    &-hand {
      transform-origin: 50% 100%;
      background-color: #466f82;
      position: absolute;
      width: 2px;
      height: 40%;
      bottom: 50%;
      left: 50%;
      border-radius: 2px;
      transition: transform 1s linear;

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 10%;
        background-color: inherit;
        backface-visibility: hidden;
      }

      &.-hours {
        height: calc(100% / 3);
        width: 3px;
        border-radius: 3px;
        transition: transform 60s linear;
      }

      &.-seconds {
        width: 1px;
        height: 45%;
        border-radius: 0;
        background-color: #cb3148;
        transition: transform 100ms cubic-bezier(0.6, 0.05, 0, 1.6);

        &::after {
          height: 12.5%;
        }
      }
    }
  }
}
</style>