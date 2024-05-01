<template>
  <Layout>
    <BaseCard v-if="cartIsEmpty">
      <h1>კალათა ცარიელია!</h1>
      <router-link :to="{name: 'products'}">
        <BaseButton>
          დაამატე პროდუქტები
        </BaseButton>
      </router-link>
    </BaseCard>

    <div v-else>

    </div>
  </Layout>
</template>

<script setup>
import useProductsStore from "@/store/modules/products.js";
import {computed} from "vue";
import BaseButton from "@/components/layout/BaseButton.vue";
import BaseCard from "@/components/layout/BaseCard.vue";
import Layout from "@/components/layout/Layout.vue";

const productsStore = useProductsStore();
const cart = computed(() => productsStore.getCart())
const cartIsEmpty = computed(() => cart.value.totalItems);

</script>
