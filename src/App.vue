<template>
  <div>
    <BaseHeader/>
    <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
    </router-view>
  </div>
</template>

<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
</script>