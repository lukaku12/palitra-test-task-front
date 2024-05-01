<template>
  <BaseCard
      class="flex flex-col rounded-xl gap-y-2 overflow-hidden text-center border pb-6 w-full h-full max-w-[300px]">

    <ImageWithLoader class="rounded" :image="product.image" alt="product.name"/>

    <h2>{{ product?.name }}</h2>

    <div class="flex justify-center gap-x-1">
      <p class="price">{{ product?.price }} ₾</p>
    </div>

    <BaseButton
        @click="$emit('add-to-cart', product)"
        class="flex w-auto bg-primary-100 hover:bg-primary-200 rounded-xl mx-auto px-2 py-1 text-white"
    >
      დაამატე კალათაში
    </BaseButton>

  </BaseCard>
</template>

<script setup>
import ImageWithLoader from "@/components/ImageWithLoader.vue";
import BaseButton from "@/components/layout/BaseButton.vue";
import BaseCard from "@/components/layout/BaseCard.vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['add-to-cart']);

</script>
