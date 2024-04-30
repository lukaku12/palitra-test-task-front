<template>
  <main>
    <div class="container shop-items">
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
        route-name="products"
        @set-current-page="setCurrentPage"
    />

  </main>
</template>

<script setup>
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
main {
  padding: 20px 0;
}

.container {
  width: 90%;
  margin: 0 auto 40px;
}

.shop-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  place-items: center;
  grid-auto-rows: minmax(100px, auto);
}

</style>
