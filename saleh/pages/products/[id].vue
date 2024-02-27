<template>
  <div><ProductDetails :product="products" /></div>
</template>

<script setup>
const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;
const { data: products } = await useFetch(url, { key: id });
definePageMeta({
  layout: "products",
});
if (!products.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "product not found ",
    fatal: true,
  });
}
</script>

<style scoped></style>
