import { useState } from "react";

export default function Post({ posts, post, upVote }) {
  return (
    <>
      <p>{post.body}</p>
      <p>Posted by: {post.author}</p>
      <p>Votes: {post.votes}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          upVote(post.id);
          console.log(posts);
        }}
      >
        upVote
      </button>
      <hr />
    </>
  );
}
