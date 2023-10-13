<template>
  <div class="singlePost">
    <router-link
      :to="{ name: 'Details', params: { id: post.id } }"
      class="route"
    >
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });
    return { snippet };
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.tag {
  color: #f8f8f8;
  background-color: orange;
  margin: 8px;
  padding: 12px;
  border-radius: 8px;
}
.route {
  text-decoration: none;
  color: #42b983;
}
.route:hover {
  color: #45916e;
}
.singlePost {
  padding: 32px;
  margin: 100px auto;
  width: 50%;
  background-color: #f2f2f2;
  border-radius: 16px;
}
.singlePost p {
  margin-bottom: 48px;
  font-style: italic;
}
</style>
