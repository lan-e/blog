<template>
  <h1>Details</h1>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <div v-if="error">
    {{ error }}
  </div>
</template>
<script>
import getPost from "../composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>
