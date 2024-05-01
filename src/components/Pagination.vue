<template>
  <div class="py-10 w-full">
    <div class="flex gap-x-1 w-full max-w-[365px] overflow-hidden mx-auto">
      <template v-for="page in totalPages" :key="page">

        <BaseButton
            ref="btnRef"
            :class="
              currentPage === +page ?
              'bg-primary-100 hover:bg-primary-200 border-2 border-secondary-200' :
              'bg-secondary-200 hover:bg-secondary-300'
            "
            class="font-bold transition"
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
import {onMounted, ref} from "vue";
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

const btnRef = ref(null);

const setCurrentPage = (page) => {
  emits('set-current-page', page);
  router.push({
    name: routeName,
    query: {page},
  });
};

onMounted(() => setCurrentPage(+route.query.page || 1));

</script>

