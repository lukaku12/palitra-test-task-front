<template>
  <div class="relative">
    <router-link :to="{name: 'cart'}">
      <BaseButton isIcon>
        <IconShoppingCart class="w-[30px] h-[30px]" fill="white"/>
        <span
            v-if="cart.totalItems"
            class=" flex items-center justify-center absolute text-xs top-8 -left-1 bg-red-500 text-white rounded-full w-[20px] h-[20px]"
        >
        {{ displayCartCount }}
      </span>
      </BaseButton>
    </router-link>
  </div>
</template>

<script setup>
import IconShoppingCart from "@/components/icons/IconShoppingCart.vue";

import {computed} from "vue";
import useProductsStore from "@/store/modules/products.js";
import BaseButton from "@/components/layout/BaseButton.vue";

const productsStore = useProductsStore();
const cart = computed(() => productsStore.getCart())
const displayCartCount = computed(() => cart.value.totalItems > 9 ? "9+" : cart.value.totalItems);

</script>

