<template>
  <Layout>
    <BaseCard>
      <p class="text-primary-200">404</p>
      <p>Page Not Found!</p>
    </BaseCard>
  </Layout>
</template>

<script>

import {defineComponent} from "vue";
import Layout from "@/components/layout/Layout.vue";
import BaseCard from "@/components/layout/BaseCard.vue";

export default defineComponent({
  components: {BaseCard, Layout}
})
</script>