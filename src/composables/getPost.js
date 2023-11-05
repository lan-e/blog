import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // let data = await fetch(`http://localhost:3000/posts/${id}`);
      let data = await fetch(
        `https://api.npoint.io/873c251c5d5601d8e949/posts/${id - 1}`
      );
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};
export default getPost;
