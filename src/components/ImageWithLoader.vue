<template>
  <img
      ref="imageRef"
      :width="width"
      :height="height"
      :class="`w-[${width}px] h-[${height}px]`"
      :src="image"
      loading="lazy"
      alt="Product Image"
  >
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 266,
  },
  height: {
    type: Number,
    default: 200,
  },
})

</script>
