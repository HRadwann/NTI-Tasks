const postsContainer = document.getElementById("posts-container");
const errorDiv = document.getElementById("error");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    })
    .then(posts => {
      renderPosts(posts);
    })
    .catch(error => {
      errorDiv.textContent = error.message;
    });
}

function renderPosts(posts) {
  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body.slice(0, 100)}...</p>
    `;
    postEl.addEventListener("click", () => showPostModal(post));
    postsContainer.appendChild(postEl);
  });
}

function showPostModal(post) {
  modalTitle.textContent = post.title;
  modalBody.textContent = post.body;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

fetchPosts();
