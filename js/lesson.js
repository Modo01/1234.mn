import { getPosts } from "../js/lessonn.js";
// import "..css/style.css";

const api_url = "https://api.jsonbin.io/v3/b/63118976a1610e63861a7486";

console.log("im here");

getPosts(api_url, (posts) => {
  console.log(posts);
  posts.forEach((post) => {
    document.getElementById("posts").innerHTML += post.Create();
  });
});

// console.log("END");
// api.jsonbin.io
// Write to Б. Сайхнаа
