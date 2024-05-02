<template>
  <Layout
      :class="dataIsNotEmptyAfterFetch(isFetched, paginatedProducts.data) ? '!justify-start' : ''"
  >
    <ErrorMessage v-if="error" @click="setError(null)">{{ error }}</ErrorMessage>

    <div class="my-grid">
      <template v-if="dataIsNotEmptyAfterFetch(isFetched, paginatedProducts.data)">
        <ProductListItem
            v-for="product in paginatedProducts.data"
            :key="product.id"
            :product="product"
            @add-to-cart="cartStore.addProductToCart"
        />
      </template>
    </div>

    <Pagination
        v-if="paginatedProducts.totalPages"
        :current-page="currentPage"
        :total-pages="paginatedProducts.totalPages"
        route-name="products.index"
        @set-current-page="setCurrentPage"
    />

    <BaseCard v-if="dataIsEmptyBeforeFetch(isFetched, paginatedProducts.data)">
      <p>იტვირთება...</p>
    </BaseCard>
    <BaseCard v-if="dataIsEmptyAfterFetch(isFetched, paginatedProducts.data)">
      <p>პროდუქტები არ მოიძებნა</p>
    </BaseCard>


  </Layout>
</template>

<script setup>
import Layout from "@/components/layout/Layout.vue";
import ProductListItem from "@/components/products/ProductListItem.vue";
import Pagination from "@/components/Pagination.vue";
import {computed, onMounted,} from "vue";
import useProductsStore from "@/store/modules/products.js";
import usePagination from "@/composables/hooks/usePagination.js";
import useRef from "@/composables/hooks/useRef.js";
import useRequestState from "@/composables/useRequestState.js";
import useCartStore from "@/store/modules/cart.js";
import BaseCard from "@/components/layout/BaseCard.vue";
import ErrorMessage from "@/components/layout/ErrorMessage.vue";

const productsStore = useProductsStore();
const cartStore = useCartStore();

const [currentPage, setCurrentPage] = useRef(1);
const [products, setProducts] = useRef([]);
const [isFetched, setIsFetched] = useRef(false);
const [error, setError] = useRef(null);

const paginatedProducts = computed(() => usePagination(products.value, currentPage.value, 9));

const {
  dataIsNotEmptyAfterFetch,
  dataIsEmptyBeforeFetch,
  dataIsEmptyAfterFetch,
} = useRequestState();

onMounted(() => productsStore.fetchProducts(setIsFetched, setProducts, setError));


</script>

<style scoped>
.my-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1100px;
  place-items: center;
  margin-top: 3rem;
  grid-auto-rows: 1fr;
}
</style>