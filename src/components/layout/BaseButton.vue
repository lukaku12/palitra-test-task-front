<template>
  <button
      :class="
      isIcon ?
        'rounded-full border px-2 py-2 hover:bg-secondary-200' :
        'bg-primary-100 hover:bg-primary-200 rounded-xl mx-auto px-4 py-1 text-white'
      "
  >
    <slot/>
  </button>
</template>

<script setup>
defineProps({
  isIcon: {
    type: Boolean,
    default: false,
  }
})
</script>