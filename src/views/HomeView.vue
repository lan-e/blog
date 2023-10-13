<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <p>Loading data...</p>
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "@/components/PostList.vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style>
body {
  margin: 100px auto;
  user-select: none;
}
.home {
  min-height: 80vh;
}
</style>
