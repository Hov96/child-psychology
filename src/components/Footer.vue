<template>
  <footer class="footer bg-dark py-5">
    <div class="container grid grid-3">
      <div>
        <h1>WebSite</h1>
        <p>Copyright &copy; 2020</p>
      </div>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'HomePage' }">Home</router-link></li>
          <li>
            <router-link :to="{ name: 'AboutMe' }">About Me</router-link>
          </li>
          <li><router-link :to="{ name: 'Books' }">All Books</router-link></li>
        </ul>
      </nav>
      <div class="social">
        <a href="#"></a>
        <a href="#">Facebook</a>
        <a href="#">Instagramm</a>
        <a href="#">Gmail</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang=""></style>
