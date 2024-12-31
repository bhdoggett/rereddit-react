import PostForm from "@/components/PostForm";
import { useState } from "react";
import PostList from "@/components/PostList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(true);
  const [postId, setPostId] = useState(1);

  const addPost = (post) => {
    setPosts([...posts, post]);
    setPostId(postId + 1);
  };

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  const upVote = (postId) => {
    setPosts(
      (prevPosts) =>
        [...prevPosts]
          .map((post) =>
            post.id === postId ? { ...post, votes: post.votes + 1 } : post
          )
          .sort((a, b) => b.votes - a.votes) // Sort by votes (descending)
    );
  };

  return (
    <>
      <main>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="page-header">
              <h1>Project Reddit</h1>
            </div>

            <div className="posts">
              <PostList posts={posts} showPosts={showPosts} upVote={upVote} />
            </div>

            <PostForm
              posts={posts}
              addPost={addPost}
              togglePosts={togglePosts}
              showPosts={showPosts}
              postId={postId}
            />
          </div>
        </div>
      </main>
    </>
  );
}

// const Button = ({ count, handleClick }) => {
//   return <button onClick={handleClick}>{count}</button>;
// };
