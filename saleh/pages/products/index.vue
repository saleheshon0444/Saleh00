<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p">
        <ProductsCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductsCard from "~/components/productsCard.vue";

definePageMeta({
  layout: "products",
});
// fetch products
const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=5"
);
</script>

<style scoped></style>
