<template>
  <div class="card" :class="{ 'card-with-img': isHaveImg }">
    <h4>{{ title }}</h4>
    <img v-if="isHaveImg" :src="imgUrl" :alt="$t('image')" />
    {{ url }}
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      url: "",
    };
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    isHaveImg: {
      type: Boolean,
      required: false,
    },
    imgUrl: {
      type: String,
      required: false,
    },
  },
  //   computed: {
  //     requireUrl() {
  //       return require(this.imgUrl);
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px;
  &-with-img {
    text-align: center;
    margin: 18px 10px 40px;
    transition: transform 0.2s ease-in;
    &:hover {
      transform: translateY(-15px);
    }
  }
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
