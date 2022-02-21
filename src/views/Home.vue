<template>
  <div class="home">
    <!-- Navbar -->
    <div class="navbar">
      <div class="container flex">
        <h1 class="logo">WebSite</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="features.html">Features</a></li>
            <li><a href="docs.html">Docs</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Showcase -->
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps of all kinds, from large scale enterprise APIs to static
            websites for individuals. Fill out the form to try a demo of our platform
          </p>
          <a href="features.html" class="btn btn-outline">Read More</a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <h3 class="stats-heading text-center my-1">
          Welcome to the best platform for building applications of all types with modern
          architecture and scaling
        </h3>

        <div class="grid grid-3 text-center my-4">
          <div>
            <i class="fas fa-server fa-3x"></i>
            <h3>10,349,405</h3>
            <p class="text-secondary">Deployments</p>
          </div>
          <div>
            <i class="fas fa-upload fa-3x"></i>
            <h3>987 TB</h3>
            <p class="text-secondary">Published</p>
          </div>
          <div>
            <i class="fas fa-project-diagram fa-3x"></i>
            <h3>2,343,265</h3>
            <p class="text-secondary">Projects</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cli -->
    <section class="cli">
      <div class="container grid">
        <img src="images/cli.png" alt="" />
        <Card :title="'Easy to use, cross platform CLI'" />
        <Card :title="'Deploy in seconds'" />
      </div>
    </section>

    <!-- Cloud -->
    <section class="cloud bg-primary my-2 py-2">
      <div class="container grid">
        <div class="text-center">
          <h2 class="lg">Extreme Cloud Hosting</h2>
          <p class="lead my-1">
            Cloud hosting like you've never seen. Fast, efficient and scalable
          </p>
          <a href="features.html" class="btn btn-dark">Read More</a>
        </div>
        <img src="images/cloud.png" alt="" />
      </div>
    </section>

    <!-- Languages -->
    <section class="languages">
      <h2 class="md text-center my-2">Supported Languages</h2>
      <div class="container flex">
        <div v-for="(book, index) in books" :key="index">
          <Card :title="book.name" :isHaveImg="book.isHaveImg" :imgUrl="book.url" />
          <!-- <img src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png" alt="" /> -->
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-dark py-5">
      <div class="container grid grid-3">
        <div>
          <h1>WebSite</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="features.html">Features</a></li>
            <li><a href="docs.html">Docs</a></li>
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
  </div>
</template>

<script>
// Components
import Card from "@/components/Card/Card";

export default {
  name: "HomePage",
  components: { Card },
  data() {
    return {
      books: [
        {
          name: "Book-1",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-2",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-3",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-4",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-5",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-6",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-7",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-8",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-9",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
        {
          name: "Book-10",
          isHaveImg: true,
          url: "@/assets/default-book.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
