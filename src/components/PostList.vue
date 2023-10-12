<template>
  <h1>Welcome to my blog</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => {
      console.log("mounted");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
  },
  mounted() {
    console.log("mounted using options");
  },
};
</script>
<style></style>
