<template>
  <div id="auto-ellipsis-wrapper" ref="container" v-bind="$attrs">
    <span ref="text">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    startEllipsisLine?: number;
    boundaryValue?: number;
    suffix?: boolean;
  }>(),
  {
    startEllipsisLine: 1,
    boundaryValue: 2,
    suffix: false,
  }
);

const container = ref<HTMLDivElement>();
const text = ref<HTMLSpanElement>();
const cssEntirely = computed<boolean>(() => {
  return props.startEllipsisLine === 1;
});

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

  if (containerWidth <= parentWidth) {
    textNode.textContent = str;
    return;
  } else if (cssEntirely.value) {
    container.style.width = parentWidth + 'px';
    container.style.whiteSpace = 'nowrap';
    container.style.textOverflow = 'ellipsis';
    container.style.overflow = 'hidden';
    return;
  } else {
    const textWidth = textNode.offsetWidth;
    const strNumber = str.length;
    const avgStrWidth = textWidth / strNumber;
    const canFitStrNumber = Math.floor(
      (parentWidth * props.startEllipsisLine) / avgStrWidth
    );

    const shouldDelNumber = strNumber - canFitStrNumber + 1.5;

    const delEachSide = shouldDelNumber / 2;
    const startRight = Math.floor(strNumber / 2 - delEachSide);
    const endLeft = Math.ceil(strNumber / 2 + delEachSide);

    switch (props.suffix) {
      case true: {
        textNode.textContent =
          str.slice(0, startRight) + '...' + str.slice(endLeft);
        break;
      }
      case false: {
        textNode.textContent = str.slice(0, -shouldDelNumber) + '...';
        break;
      }
    }

    container.style.wordBreak = 'break-all';
    container.style.whiteSpace = 'normal';
  }
};

const observer = new ResizeObserver(() => {
  const containerEl: HTMLDivElement =
    container.value! || document.getElementById('auto-ellipsis-wrapper');
  autoEllipsis(containerEl, text.value!);
});

nextTick(() => {
  premitiveText = text.value?.innerText ?? '';
  const appEl = document.getElementById('app');
  observer.observe(appEl!);
});
</script>

<style scoped></style>
