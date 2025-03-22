import { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api/api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(setPosts);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-gray-200 rounded-lg mb-2">
          <p className="font-semibold">{post.title}</p>
          <p>{post.comments} comments</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
