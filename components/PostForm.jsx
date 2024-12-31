import { useState, useEffect } from "react";

export default function PostForm({
  addPost,
  showPosts,
  togglePosts,
  posts,
  postId,
}) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const post = { body, author, votes: 0, id: postId };
    addPost(post);
    setBody("");
    setAuthor("");
    console.log(posts);
  };

  return (
    <form className="post-form">
      <h3>Add a New Post</h3>

      <div className="form-group">
        <input
          type="text"
          id="post-text"
          className="form-control"
          placeholder="Post Text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br />

        <input
          type="text"
          id="post-user"
          className="form-control"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary add-post"
        onClick={handleClick}
      >
        Post
      </button>

      {showPosts && (
        <button className="btn btn-primary" onClick={togglePosts}>
          hide posts
        </button>
      )}
      {!showPosts && (
        <button className="btn btn-primary" onClick={togglePosts}>
          show posts
        </button>
      )}
    </form>
  );
}
