<template>
  <div class="pagination">
    <!--    <button class="prev" :disabled="currentPage === 2">-->
    <!--      <router-link :to="{name: routeName, query: {page: currentPage - 1}}">&laquo; Prev</router-link>-->
    <!--    </button>-->
    <div class="container">
      <template v-for="page in totalPages" :key="page">

        <button
            :class="{active: currentPage === page}"
            class="page-number"
            @click="setCurrentPage(page)"
        >
          {{ page }}
        </button>

      </template>
    </div>
    <!--    <button class="next" :disabled="currentPage === totalPages - 1">-->
    <!--      <router-link :to="{name: routeName, query: {page: currentPage + 1}}">Next &raquo;</router-link>-->
    <!--    </button>-->
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter()

const {routeName} = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  routeName: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['set-current-page']);


const setCurrentPage = (page) => {
  emits('set-current-page', page);
  router.push({
    name: routeName,
    query: {page}
  });
};

onMounted(() => {
  if (router.currentRoute.value.query.page) {
    setCurrentPage(Number(router.currentRoute.value.query.page));
  }

});

</script>

<style scoped>
.pagination {
  width: 100%;
  display: flex;

  justify-content: center;
}

.container {
  width: 100%;
  display: flex;
  max-width: 430px;
  height: 40px;
  overflow: hidden;
}

.pagination button {
  color: #fff;
  text-decoration: none;
  padding: 5px 15px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: #555;
}

.pagination button:hover {
  background-color: #777;
}

.pagination .dots {
  color: #fff;
}

.pagination .prev,
.pagination .next {
  background-color: #007bff;
}

.pagination .prev:hover,
.pagination .next:hover {
  background-color: #0056b3;
}

</style>
