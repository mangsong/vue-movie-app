<template>
  <RouterLink
    to="/"
    class="logo">
    OMDbAPI<span>.COM</span>
  </RouterLink>
</template>

<style lang="scss" scoped>


.logo {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>