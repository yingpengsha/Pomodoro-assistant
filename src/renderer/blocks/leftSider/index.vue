<template>
  <n-layout-sider
    bordered
    :collapsed="layoutStore.leftSider.isCollapsed"
    @update-collapsed="toggle"
    :native-scrollbar="false"
    :collapsed-width="0"
    collapse-mode="transform"
    trigger-style="top: 240px; width: 40px; height: 40px;"
    collapsed-trigger-style="top: 240px; right: -30px; width: 40px; height: 40px;"
    show-trigger="arrow-circle"
  >
    <div v-for="clock in Clocks" class="clock-catalog">
      <Clock :backgroundColor="clock.color" @click="() => selectClock(clock)"/>
      <h1>{{ clock.name }}</h1>
    </div>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { NLayoutSider } from "naive-ui";
import Clock from "@/components/Clock/index.vue";
import Clocks, { ClockType } from "@/constants/clocks";
import { usePomodoroStore } from "@/models/pomodoro";
import { useLayoutStore } from "@/models/layout";

const layoutStore = useLayoutStore();
const toggle = (collapse: boolean) => {
  collapse ? layoutStore.leftSider.close() : layoutStore.leftSider.open();
}

const pomodoroStore = usePomodoroStore()
const selectClock = (clock: ClockType) => {
  pomodoroStore.actions.create(clock)
}
</script>

<style lang="less" scoped>
.clock-catalog {
  padding: 12.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>