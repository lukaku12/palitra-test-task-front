<template>
  <Layout>

    <div v-if="cartIsNotEmpty" class="max-w-[500px] w-full">
      <BaseCard class="flex flex-col gap-y-2 !px-0">
        <header class="relative border-b pb-3 mb-2  px-4">
          <router-link :to="{name: 'products'}">
            <BaseButton is-icon class="absolute left-2 -top-1">
              <IconChevronLeft class="w-[20px] h-[20px]" fill="white"/>
            </BaseButton>
          </router-link>
          <h1 class="text-2xl">კალათა</h1>
        </header>

        <div class="max-h-[500px] overflow-y-auto flex flex-col gap-y-2 px-4">

          <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex items-center justify-between "
          >
            <div class="flex items-center gap-x-2">
              <img :src="item.image" alt="product" class="w-[50px] h-[50px] object-cover"/>
              <div class="flex flex-col items-start">
                <p :title="item.name" class="text-sm">{{ item.name }}</p>
                <p> {{ item.quantity }}x</p>
              </div>

            </div>
            <div>
              <p>{{ item.price }} ₾</p>
              <p class="text-[10px] text-gray-300 ">
                {{ item.totalPrice }} ₾
              </p>
            </div>
          </div>

        </div>
        <div class="!px-4 w-full flex flex-col gap-y-2">

          <div class="flex justify-between border-t pt-1 mt-2">
            <p>ჯამი:</p>
            <p>{{ cartTotalPrice }} ₾</p>
          </div>

          <div class="flex ml-auto gap-x-1">
            <BaseButton @click="productsStore.clearCart" class="bg-red-700 hover:bg-red-800 mx-0">
              გასუფთავება
            </BaseButton>
            <router-link :to="{name: 'checkout'}">
              <BaseButton class="bg-green-700 hover:bg-green-800 ">
                შეკვეთა
              </BaseButton>
            </router-link>
          </div>
        </div>

      </BaseCard>
    </div>

    <BaseCard v-if="!cartIsNotEmpty">
      <h1>კალათა ცარიელია!</h1>
      <router-link :to="{name: 'products'}">
        <BaseButton>
          დაამატე პროდუქტები
        </BaseButton>
      </router-link>
    </BaseCard>

  </Layout>
</template>

<script setup>
import useProductsStore from "@/store/modules/products.js";
import {computed} from "vue";
import BaseButton from "@/components/layout/BaseButton.vue";
import BaseCard from "@/components/layout/BaseCard.vue";
import Layout from "@/components/layout/Layout.vue";
import IconChevronLeft from "@/components/icons/IconChevronLeft.vue";

const productsStore = useProductsStore();

const cartItems = computed(() => productsStore.getCart().items);
const cartTotalPrice = computed(() => productsStore.getCart().totalPrice);
const cartIsNotEmpty = computed(() => productsStore.getCart().totalItems > 0);


</script>
