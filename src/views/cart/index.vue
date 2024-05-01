<template>
  <Layout>

    <div v-if="cartIsNotEmpty" class="max-w-[500px] w-full">
      <BaseCard class="flex flex-col gap-y-2 !px-0">
        <header class="relative border-b pb-3 mb-2  px-4">
          <BaseButton @click="router.back()" is-icon class="absolute left-2 -top-1">
            <IconChevronLeft class="w-[20px] h-[20px]" fill="white"/>
          </BaseButton>
          <h1 class="text-2xl">კალათა</h1>
        </header>

        <div class="max-h-[500px] overflow-y-auto flex flex-col gap-y-2 px-4">

          <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex items-center justify-between w-full overflow-hidden"
          >
            <div class="flex items-center gap-x-2 max-w-1/2 w-full">
              <img :src="item.image" alt="product" class="w-[50px] h-[50px] object-cover"/>
              <div class="flex flex-col items-start">
                <p :title="item.name" class="text-sm">{{ item.name }}</p>
                <div class="flex gap-x-2 w-full">
                  <p> {{ item.quantity }}x</p>

                  <div class="flex gap-x-1">
                    <BaseButton
                        v-if="item.quantity > 1"
                        @click="productsStore.removeProductFromCart(item)"
                        is-icon
                        class="!px-1.6 !py-0"
                    >
                      -
                    </BaseButton>
                    <BaseButton
                        v-if="item.quantity === 1"
                        class="!px-1 !py-0 bg-transparent hover:bg-secondary-200 border"
                        @click="productsStore.removeProductFromCart(item)"
                    >
                      delete
                    </BaseButton>
                    <BaseButton
                        @click="productsStore.addProductToCart(item)"
                        is-icon
                        class="!px-2 !py-0"
                    >
                      +
                    </BaseButton>
                  </div>


                </div>
              </div>

            </div>
            <div class="flex flex-col w-[100px] text-end">
              <p>{{ item.price }} ₾</p>
              <p class="text-[10px] text-gray-300 ">
                {{ item.totalPrice }} ₾
              </p>
            </div>
          </div>

        </div>
        <div class="!px-4 w-full flex flex-col gap-y-2 border-t pt-4">
          <div class="flex m-auto gap-x-2">
            <BaseButton @click="productsStore.clearCart" class="bg-red-700 hover:bg-red-800 mx-0">
              კალათის გასუფთავება
            </BaseButton>
            <router-link :to="{name: 'checkout'}">
              <BaseButton class="bg-green-700 hover:bg-green-800 ">
                შეკვეთზე გადასვლა
              </BaseButton>
            </router-link>
          </div>
        </div>

      </BaseCard>
    </div>

    <BaseCard v-if="!cartIsNotEmpty">
      <h1>კალათა ცარიელია!</h1>
      <router-link :to="{name: 'products.index'}">
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
import router from "@/router/index.js";

const productsStore = useProductsStore();

const cartItems = computed(() => productsStore.getCart().items);
const cartTotalPrice = computed(() => productsStore.getCart().totalPrice);
const cartIsNotEmpty = computed(() => productsStore.getCart().totalItems > 0);


</script>
