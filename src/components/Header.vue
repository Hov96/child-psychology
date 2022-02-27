<template>
  <div class="navbar">
    <div class="container flex">
      <h1 class="logo">Shushan</h1>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'HomePage' }">Home</router-link></li>
          <li>
            <router-link :to="{ name: 'AboutMe' }">About Me</router-link>
          </li>
          <li><router-link :to="{ name: 'Books' }">All Books</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
