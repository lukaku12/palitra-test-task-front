<template>
<!--  todo-->
  <img
      ref="imageRef"
      width="300"
      height="223"
      class="w-full h-full"
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
})

</script>
