// alert("coments");

const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((comments) => console.log(comments))
    .catch((error) => console.error("error happened: ", error));
};

const loadComments2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await res.json();
    console.log(comments);
  } catch (error) {
    console.log("Data loading error");
  }
};
