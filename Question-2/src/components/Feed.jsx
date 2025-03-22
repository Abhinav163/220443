import { useEffect, useState } from "react";
import { fetchFeed } from "../api/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchFeed().then(setPosts);
    }, 5000); // Fetch new posts every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Live Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-gray-200 rounded-lg mb-2">
          <p className="font-semibold">{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
