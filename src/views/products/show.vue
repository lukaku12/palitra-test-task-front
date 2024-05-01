<template>
  <Layout>
    <BaseCard>
      <div
          v-if="dataIsNotEmptyAfterFetch(isFetched, product)"
          class="flex flex-col gap-x-4 md:flex-row"
      >
        <div>
          <ImageWithLoader :width="500" :height="375" class="rounded" :image="product.image" alt="product.name"/>
        </div>

        <div class="flex flex-col justify-between md:max-w-[250px]">


          <div class="h-full flex flex-col justify-between">
            <h1 class="font-bold text-2xl">{{ product.name }}</h1>
            <p class="text-end font-bold text-xl">{{ product.price }} ₾</p>
            <div class="h-full flex items-center"><p class="mt-5">{{ product.description }}</p></div>
          </div>

          <div class="flex gap-x-2 pt-4 ">
            <BaseButton @click="store.addProductToCart(product)">კალათში დამატება</BaseButton>
            <BaseButton @click="buyProduct">პროდუქტის ყიდვა</BaseButton>
          </div>
        </div>

      </div>

      <div class="flex w-full h-full justify-center items-center">
        <p v-if="dataIsEmptyBeforeFetch(isFetched, product)">იტვირთება...</p>
        <div v-if="dataIsEmptyAfterFetch(isFetched, product)">
          <p>პროდუქტი არ მოიძებნა!</p>
          <router-link :to="{name: 'products.index'}">
            <BaseButton class="mt-4">უკან დაბრუნება</BaseButton>
          </router-link>
        </div>

      </div>
    </BaseCard>


  </Layout>
</template>

<script setup>
import Layout from "@/components/layout/Layout.vue";
import BaseCard from "@/components/layout/BaseCard.vue";
import {computed, onMounted} from "vue";
import useProductsStore from "@/store/modules/products.js";
import {useRoute, useRouter} from "vue-router";
import useRequestState from "@/composables/useRequestState.js";
import BaseButton from "@/components/layout/BaseButton.vue";
import ImageWithLoader from "@/components/ImageWithLoader.vue";

const router = useRouter();
const route = useRoute();
const store = useProductsStore();

const product = computed(() => store.product);
const isFetched = computed(() => store.isFetched);

const buyProduct = () => {
  store.addProductToCart(product.value);
  router.push({name: 'checkout'});
};

const {
  dataIsNotEmptyAfterFetch,
  dataIsEmptyBeforeFetch,
  dataIsEmptyAfterFetch,
} = useRequestState();

onMounted(() => store.fetchProductById(route.params.id));

</script>