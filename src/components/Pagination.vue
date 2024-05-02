<template>
  <div class="py-10 w-full flex justify-center">
    <div class="flex gap-x-1">
      <template v-for="page in totalPages" :key="page">
        <BaseButton
            ref="btnRef"
            :class="currentPage === +page ? '!text-primary-200' : 'hover:!text-primary-100' "
            class="font-bold !px-0 !py-0 bg-transparent hover:bg-transparent !text-black"
            @click="setCurrentPage(page)"
        >
          {{ page }}
        </BaseButton>

      </template>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, watch} from "vue";
import BaseButton from "@/components/layout/BaseButton.vue";

const router = useRouter();
const route = useRoute();

const {routeName, totalPages, currentPage} = defineProps({
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


const validatePage = (page) => {
  if (isNaN(page)) return 1;
  if (typeof page !== 'number') return 1;
  if (page < 1 || page > totalPages) return 1;
  return page;
}

const setCurrentPage = (page) => {
  const validatedPage = validatePage(page)

  emits('set-current-page', validatedPage);
  router.push({
    name: routeName,
    query: {page: validatedPage},
  });
};

onMounted(() => setCurrentPage(+route.query.page || 1));
watch(route, () => setCurrentPage(+route.query.page || 1));


</script>

