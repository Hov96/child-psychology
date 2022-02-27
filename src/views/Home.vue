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
        <!-- <div v-for="(book, index) in allBooks" :key="index">
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
        </div> -->
        <splide :options="options">
          <splide-slide>
            <div class="splide-item">
              <img src="@/assets/default-book.png" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus
                dolorem, ex necessitatibus adipisci blanditiis architecto ipsum provident
                quod, rem autem nisi quae quia at!
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="splide-item">
              <img src="@/assets/default-book.png" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus
                dolorem, ex necessitatibus adipisci blanditiis architecto ipsum provident
                quod, rem autem nisi quae quia at!
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="splide-item">
              <img src="@/assets/default-book.png" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus
                dolorem, ex necessitatibus adipisci blanditiis architecto ipsum provident
                quod, rem autem nisi quae quia at!
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="splide-item">
              <img src="@/assets/default-book.png" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus
                dolorem, ex necessitatibus adipisci blanditiis architecto ipsum provident
                quod, rem autem nisi quae quia at!
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="splide-item">
              <img src="@/assets/default-book.png" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus
                dolorem, ex necessitatibus adipisci blanditiis architecto ipsum provident
                quod, rem autem nisi quae quia at!
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </section>
  </div>
</template>

<script>
// Components
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "HomePage",
  components: { Splide, SplideSlide },
  data() {
    return {
      allBooks: [],
      options: {
        rewind: true,
        perPage: 3,
        perMove: 1,
        type: "loop",
        speed: 1000,
        gap: "20px",
        padding: "20px",
        pagination: false,
        breakpoints: {
          1200: {
            perPage: 2,
          },
          870: {
            perPage: 1,
          },
        },
      },
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

// Splide
.splide {
  width: 100%;
  height: 100%;
}

.splide__slide {
  width: 460px;
  height: 288px;
}

.splide__slide img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.carousel_body {
  position: relative;
}

.slide_options {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn_options {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.image_count {
  background-color: rgba(1, 3, 2, 0.48);
  width: 60px;
  height: 28px;
  padding: 5px 12px;
  border-radius: 24px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image_count span {
  color: #fff;
}

.splide-item {
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 40%;
  }
}

.showcase {
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 576.98px) {
  .carousel_body {
    height: 204px;
  }

  .splide__slide img {
    height: 204px;
  }

  .splide-item {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
}
</style>
