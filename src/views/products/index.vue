<template>
  <Layout class="!justify-start">
    <div class="my-grid">
      <template v-if="dataIsNotEmptyAfterFetch(isFetched, products.data)">
        <ProductListItem
            v-for="product in products.data"
            :key="product.id"
            :product="product"
            @add-to-cart="store.addProductToCart"
        />
      </template>

      <p v-if="dataIsEmptyBeforeFetch(isFetched, products.data)">იტვირთება...</p>
      <p v-if="dataIsEmptyAfterFetch(isFetched, products.data)">პროდუქტები არ მოიძებნა</p>
    </div>

    <Pagination
        :current-page="currentPage"
        :total-pages="products?.totalPages"
        route-name="products.index"
        @set-current-page="setCurrentPage"
    />

  </Layout>
</template>

<script setup>
import Layout from "@/components/layout/Layout.vue";
import ProductListItem from "@/components/products/ProductListItem.vue";
import Pagination from "@/components/Pagination.vue";
import {computed, onMounted} from "vue";
import useProductsStore from "@/store/modules/products.js";
import usePagination from "@/composables/hooks/usePagination.js";
import useRef from "@/composables/hooks/useRef.js";
import useRequestState from "@/composables/useRequestState.js";

const store = useProductsStore();

const [currentPage, setCurrentPage] = useRef(1);

const products = computed(() => usePagination(store.products, currentPage.value, 9));
const isFetched = computed(() => store.isFetched);

const {
  dataIsNotEmptyAfterFetch,
  dataIsEmptyBeforeFetch,
  dataIsEmptyAfterFetch,
} = useRequestState();

onMounted(() => store.fetchProducts());


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