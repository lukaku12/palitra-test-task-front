<template>
  <header class="w-full h-full">
    <div class="h-[80px]"></div>
    <div
        class="flex text-white bg-secondary-400 text-2xl h-[80px] top-0 px-2 md:px-20 fixed w-full z-50 justify-between items-center">
      <router-link :to="{name: 'products.index'}" class="text-white">
        <h1>ჩემი მაღაზია</h1>
      </router-link>
      <Cart/>
    </div>
  </header>
</template>

<script setup>
import Cart from "@/components/cart/Cart.vue";
</script>
