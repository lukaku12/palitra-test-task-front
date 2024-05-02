<template>
  <BaseCard class="w-full z-50 bg-red-800 absolute top-[80px]">
    <p class="px-12">
      <slot/>
    </p>
    <BaseButton
        is-icon
        @click="$emit('close')"
        class="w-[45px] font-bold absolute top-1/2 right-2 -translate-y-1/2">
      x
    </BaseButton>
  </BaseCard>
</template>

<script setup>

import BaseCard from "@/components/layout/BaseCard.vue";
import BaseButton from "@/components/layout/BaseButton.vue";
</script>
