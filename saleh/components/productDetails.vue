<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="image of product" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">price - ${{ product.price }}</p>
        <h3 class="font-bold mb-4 border-b-2 pb-2">product description :</h3>
        <p>{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
useHead({
  title: product.title,
  meta: [{ name: "description", content: product.description }],
});
</script>

<style scoped></style>
