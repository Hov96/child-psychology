<template>
  <div class="home">
    <!-- Showcase -->
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-text">
          <h1>What I do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam
            incidunt eaque id omnis ipsa exercitationem ex ut explicabo laboriosam, vero,
            possimus, tenetur dolorem iure?
          </p>
          <router-link :to="{ name: 'AboutMe' }" class="btn btn-outline"
            >Read More</router-link
          >
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <h3 class="stats-heading text-center my-1">
          Below you can see my statistics. My sales and my results
        </h3>

        <div class="grid grid-3 text-center my-4">
          <div>
            <i class="fas fa-server fa-3x"></i>
            <h3>450</h3>
            <p class="text-secondary">Sales</p>
          </div>
          <div>
            <i class="fas fa-upload fa-3x"></i>
            <h3>11</h3>
            <p class="text-secondary">Books</p>
          </div>
          <div>
            <i class="fas fa-project-diagram fa-3x"></i>
            <h3>100 %</h3>
            <p class="text-secondary">Successes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cli -->
    <section class="cli">
      <div class="container grid">
        <img src="images/cli.png" alt="" />
        <div class="card">
          <h4>Easy to understand for children</h4>
        </div>

        <div class="card">
          <h4>Cheap and available</h4>
        </div>
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
      <div class="flex">
        <div v-for="(book, index) in allBooks" :key="index">
          <div class="card">
            <router-link :to="{ name: 'Book', params: { id: book.id } }">
              <div class="card__item">
                <div class="card__item--cover">
                  <img :src="book.url" />
                </div>
                <div class="card__item--description">
                  <p class="card__item--title">
                    {{ book.name }}<br />
                    <span class="card__item--author">{{ book.authorName }}</span>
                  </p>
                  <router-link to="/" class="card__item--link">More</router-link>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Components

export default {
  name: "HomePage",
  data() {
    return {
      allBooks: [],
    };
  },
  created() {
    this.allBooks = this.$store.getters.getBooks;
    this.allBooks.length = 5;
  },
};
</script>

<style scoped lang="scss">
.card {
  &__item {
    display: inline-block;
    width: 230px;
    height: 390px;
    box-shadow: 0 0 20px #aaa;
    border-radius: 10px;
    margin: 25px;
    padding: 10px 10px 0 10px;
    vertical-align: top;
    transition: height 1s;
    &--link {
      font-size: 14px;
      position: relative;
      left: -5px;
      top: -40px;
      float: right;
    }
    &--cover {
      border: 2px solid gray;
      height: 80%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--title {
      margin-top: 12px;
      font-size: 20px;
    }
    &--author {
      font-size: 15px;
    }
  }
}
</style>
