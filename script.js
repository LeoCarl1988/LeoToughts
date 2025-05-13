document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        { title: "Random Thought #3", content: "Why do we always find socks that match, but never the right pair?" },
        { title: "Random Thought #4", content: "Is it possible to get lost if you don’t know where you're going?" }
    ];

    const postContainer = document.querySelector('.post');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postContainer.appendChild(postElement);
    });
});
