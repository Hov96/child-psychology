<template>
  <div>
    <h1>Current Book here</h1>
    <span>
      <pre>{{ currentBook }}</pre>
    </span>
  </div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      currentBook: {},
    };
  },
  created() {
    this.currentBook = this.$store.getters.getBooks.find(
      (el) => el.id === this.$route.params.id
    );
  },
};
</script>

<style lang=""></style>
