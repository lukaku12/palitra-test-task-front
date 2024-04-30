<template>
  <header>
    <div class="filler"></div>
    <div class="container">
<!--      <router-link :to="{name: 'home'}">-->
        <h1>ჩემი მაღაზია</h1>
<!--      </router-link>-->

      <div class="cart-icon">
        <button class="cartBtn">
          <IconShoppingCart/>
          <span v-if="cartCount" class="cart-count">{{ displayCartCount }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconShoppingCart from "@/components/icons/IconShoppingCart.vue";
import {computed, onUpdated} from "vue";
import useProductsStore from "@/store/modules/products.js";

const productsStore = useProductsStore();

onUpdated(() => {
  console.log(productsStore.cart)
})

const cartCount = computed(() => productsStore.cart.length)

const displayCartCount = computed(() => cartCount.value > 9 ? "9+" : cartCount.value);


</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #333;
  padding: 20px 30px;
  color: #fff;
}

.filler {
  height: 88px;
}

header h1 {
  margin: 0;
}

.cart-icon {
  position: relative;
}

.cartBtn {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.cart-icon .cartBtn {
  width: 30px;
  vertical-align: middle;
  position: relative;
}

.cart-count {
  position: absolute;
  font-weight: bold;
  top: -5px;
  right: -5px;
  background-color: #ff0000;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.8rem;
}
</style>