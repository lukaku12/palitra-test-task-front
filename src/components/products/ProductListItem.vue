<template>
  <div class="shop-item">
    <img :src="product?.image" alt="Product Image">
    <h2>{{ product?.name }}</h2>
    <div class="price-container">
      <p class="price">{{ product?.price }} </p>
      <p>ლარი</p>
    </div>
    <button @click="$emit('add-to-cart', product)" class="add-to-cart-btn">
      დაამატე კალათაში
<!--      {{ product.id }}-->
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['add-to-cart']);

</script>

<style scoped>
.shop-item {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-bottom: 20px;
  max-height: 400px;
  max-width: 300px;
}

.shop-item img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.shop-item h2 {
  margin-top: 10px;
  font-size: 18px;
}

.price-container{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
}

.shop-item p.price {
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
}

.shop-item button.add-to-cart-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-item button.add-to-cart-btn:hover {
  background-color: #0056b3;
}

</style>