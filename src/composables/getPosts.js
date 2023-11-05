import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      // let data = await fetch("http://localhost:3000/posts");
      let data = await fetch(
        "https://api.npoint.io/873c251c5d5601d8e949/posts"
      );
      if (!data.ok) {
        throw Error("no data");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};
export default getPosts;
