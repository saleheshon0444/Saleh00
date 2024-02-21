<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Dojo</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/About">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
