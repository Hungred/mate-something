<template>
  <UButton
    :variant="variant"
    :disabled="disabled"
    :size="size"
    :color="color"
    :icon="icon"
  >
    <slot>{{ text }}</slot>
  </UButton>
</template>
<script setup lang="ts">
interface Props {
  text?: string; // 若有輸入時以此為主，若沒有就顯示 slot
  color?: 'pink' | 'gray' | 'neutral' | 'primary' | undefined; // 預設為 gray
  disabled?: boolean; // 預設為 false
  variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link'; // 預設為 soft
  size?: 'sm' | 'md' | 'lg'; // 預設為 md
  icon?: any;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'gray',
  disabled: false,
  variant: 'soft',
  size: 'md',
});
</script>
