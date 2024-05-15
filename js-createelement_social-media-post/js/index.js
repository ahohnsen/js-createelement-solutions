console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent = "This is a new social media post.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";

const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.textContent = "♥ Like";
newLikeButton.setAttribute("type", "button");

newLikeButton.addEventListener("click", handleLikeButtonClick);

postFooter.append(username, newLikeButton);
newPost.append(postText, postFooter);
document.body.append(newPost);
