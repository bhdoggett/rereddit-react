import React, { useState } from "react";
import Post from "./Post";

// PostsList component receives 'posts' as a prop and maps through them to render individual Post components
const PostsList = ({ posts, showPosts, upVote }) => {
  const postItems = posts.map((post) => (
    <Post key={post.id} post={post} upVote={upVote} posts={posts} /> // We use the index as the key (not ideal, but sufficient for this app)
  ));

  return showPosts && <ul className="col-md-4 list-group">{postItems}</ul>;
};

export default PostsList;
