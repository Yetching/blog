<template>
  <div id="auto-ellipsis-wrapper" ref="container" v-bind="$attrs">
    文本溢出组件
  </div>
  <span ref="text">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{}>(), {});

const container = ref<HTMLDivElement>();
const text = ref<HTMLSpanElement>();

let premitiveText: string = '';

const autoEllipsis = (container: HTMLElement, textNode: HTMLSpanElement) => {
  const str = premitiveText;

  // 先进行宽度计算
  textNode.textContent = str;
  container.style.whiteSpace = 'nowrap';
  container.style.width = 'fit-content';

  const containerWidth = container.clientWidth;

  const parentEle = container.parentElement;
  const parentWidth = parentEle!.clientWidth || parentEle!.offsetWidth;
};
</script>

<style scoped></style>
